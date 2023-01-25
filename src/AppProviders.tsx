import { FunctionComponent, ReactElement } from 'react'

import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { CustomStatusBar } from 'atoms'
import { NativeBaseProvider } from 'native-base'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { theme } from 'src/theme'

export const AppProviders: FunctionComponent<{ children: ReactElement<any, any> }> = ({
  children
}) => {
  const initialWindowMetrics = {
    frame: { x: 0, y: 0, width: 0, height: 0 },
    insets: { top: 0, left: 0, right: 0, bottom: 0 }
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NativeBaseProvider
        config={{ suppressColorAccessibilityWarning: true }}
        initialWindowMetrics={initialWindowMetrics}
        theme={theme}>
        <CustomStatusBar barStyle="light-content" />

        <BottomSheetModalProvider>{children}</BottomSheetModalProvider>
      </NativeBaseProvider>
    </GestureHandlerRootView>
  )
}
