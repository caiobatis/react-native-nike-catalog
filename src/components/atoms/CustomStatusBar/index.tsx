import { memo } from 'react'

import Constants from 'expo-constants'
import { Platform, SafeAreaView, StatusBar } from 'react-native'

type TCustomStatusBar = {
  barStyle?: 'light-content' | 'dark-content'
}

const isAndroid = Platform.OS === 'android'

export const CustomStatusBar = memo(({ barStyle = 'dark-content' }: TCustomStatusBar) => {
  return (
    <>
      <SafeAreaView
        style={{
          backgroundColor: 'transparent',
          zIndex: 1001,
          marginTop: isAndroid
            ? 0
            : Constants.statusBarHeight > 20
            ? -Constants.statusBarHeight - 15
            : -Constants.statusBarHeight
        }}
      />

      <StatusBar translucent backgroundColor="transparent" barStyle={barStyle} />
    </>
  )
})
