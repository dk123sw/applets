import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '二维码生成'
  }

  constructor(props){
      super(props);
      this.state={

      };
  }

  render () {
    return (
      <View className='first-page'>
        <Text>flex-direction: row 横向布局</Text>
        <View className='flex-wrp' style='flex-direction:row;'>
          <View className='flex-item demo-text-1'>1</View>
          <View className='flex-item demo-text-2'>2</View>
          <View className='flex-item demo-text-3'>3</View>
        </View>
        <Text>flex-direction: column 纵向布局1</Text>
        <View className='flex-wrp' style='flex-direction:column;'>
          <View className='flex-item flex-item-V demo-text-1'>1</View>
          <View className='flex-item flex-item-V demo-text-2'>2</View>
          <View className='flex-item flex-item-V demo-text-3'>3</View>
        </View>
      </View>
    )
  }
}

