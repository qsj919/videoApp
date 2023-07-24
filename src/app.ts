import { PropsWithChildren, useEffect } from 'react'
import { useLaunch } from '@tarojs/taro'
import VConsole from 'vconsole'
import './app.scss'

function App({ children }: PropsWithChildren) {

  useEffect(()=>{
    if (process.env.TARO_ENV === 'h5') {
      new VConsole()
    }
    new VConsole()
  })
  useLaunch(() => {
    console.log('App launched.')
  })

  // children 是将要会渲染的页面
  return children
}

export default App
