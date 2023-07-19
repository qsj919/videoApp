import { View, Text } from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro'
import './index.scss'
import { useState } from 'react'

export default function Index() {

  interface SuccessVideoResult {
    /** 选定视频的时间长度 */
    duration: number
    /** 返回选定视频的高度 */
    height: number
    /** 选定视频的数据量大小 */
    size: number
    /** 选定视频的临时文件路径 */
    tempFilePath: string
    /** 封面 */
    thumbTempFilePath: string
    /** 返回选定视频的宽度 */
    width: number
    /** 调用结果 */
    errMsg: string
  }
  useLoad(() => {
    console.log('Page loaded.')
  })

  const [path, setPath] = useState("")

  /** 选择视频 */
  const onUploadClick = () => {
    Taro.chooseVideo({
      compressed: false,
      sourceType: ['album'],
      success: res => {
        console.log('视频元信息：',res)
        // uploadVideo(res)
        setPath(res.tempFilePath)
      },
      fail: function(error){
        console.log(error, 'error');
        
      }
    })
  }

  return (
    <View className='index'>
      <Text>Hello world!</Text>
      <View onClick={onUploadClick}>
        上传视频
      </View>
      <View>{path}</View>
    </View>
  )
}
