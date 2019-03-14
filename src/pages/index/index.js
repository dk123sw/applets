import Taro, { Component } from '@tarojs/taro'
import { View, Text, Canvas } from '@tarojs/components'
import './index.scss'
import QR from '../qrcode/qrcode'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '二维码生成'
  }

  constructor(props){
      super(props);
      this.state={

      };
  }

  componentDidMount(){
      let size = this.setCanvasSize();
      QR.api.draw('http://www.baidu.com', 'canvas', size.w, size.h);
      setTimeout(() => { this.canvasToTempImage();},1000);
  }

    //适配不同屏幕大小的canvas
    setCanvasSize = () =>{
        let size = {};
        try {
            let res = Taro.getSystemInfoSync();
            let scale = 750/686;//不同屏幕下canvas的适配比例；设计稿是750宽
            let width = res.windowWidth/scale;
            let height = width;//canvas画布为正方形
            size.w = width;
            size.h = height;
        } catch (e) {
            // Do something when catch error
            console.log("获取设备信息失败"+e);
        }
        return size;
    }

    //获取临时缓存照片路径，存入data中
    canvasToTempImage = () =>{
        let that = this;
        Taro.canvasToTempFilePath({
            canvasId: 'canvas',
            success: function (res) {
                let tempFilePath = res.tempFilePath;
                console.log(tempFilePath);
                that.setData({
                    imagePath:tempFilePath,
                    // canvasHidden:true
                });
            },
            fail: function (res) {
                console.log(res);
            }
        });
    }

  render () {
    let size = this.setCanvasSize();
    return (
      <View className='first-page'>
        {/*<Text>flex-direction: row 横向布局</Text>*/}
        {/*<View className='flex-wrp' style='flex-direction:row;'>*/}
          {/*<View className='flex-item demo-text-1'>1</View>*/}
          {/*<View className='flex-item demo-text-2'>2</View>*/}
          {/*<View className='flex-item demo-text-3'>3</View>*/}
        {/*</View>*/}
        {/*<Text>flex-direction: column 纵向布局1</Text>*/}
        {/*<View className='flex-wrp' style='flex-direction:column;'>*/}
          {/*<View className='flex-item flex-item-V demo-text-1'>1</View>*/}
          {/*<View className='flex-item flex-item-V demo-text-2'>2</View>*/}
          {/*<View className='flex-item flex-item-V demo-text-3'>3</View>*/}
        {/*</View>*/}
        <Canvas canvasId='canvas' style={{width: `${size.w}px`, height: `${size.h}px`}}/>
      </View>
    )
  }
}

