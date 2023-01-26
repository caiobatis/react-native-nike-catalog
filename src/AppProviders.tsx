import { FunctionComponent, ReactElement } from 'react'

import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import NetInfo from '@react-native-community/netinfo'
import { NavigationContainer } from '@react-navigation/native'
import { CustomStatusBar } from 'atoms'
import { NativeBaseProvider } from 'native-base'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { QueryClient, QueryClientProvider, onlineManager } from 'react-query'
import { theme } from 'src/theme'

const queryClient = new QueryClient()

onlineManager.setEventListener((setOnline) => {
  return NetInfo.addEventListener((state) => {
    setOnline(!!state.isConnected)
  })
})

export const AppProviders: FunctionComponent<{ children: ReactElement<any, any> }> = ({
  children
}) => {
  const initialWindowMetrics = {
    frame: { x: 0, y: 0, width: 0, height: 0 },
    insets: { top: 0, left: 0, right: 0, bottom: 0 }
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        <NativeBaseProvider
          config={{ suppressColorAccessibilityWarning: true }}
          initialWindowMetrics={initialWindowMetrics}
          theme={theme}>
          <CustomStatusBar barStyle="light-content" />

          <NavigationContainer>
            <BottomSheetModalProvider>{children}</BottomSheetModalProvider>
          </NavigationContainer>
        </NativeBaseProvider>
      </QueryClientProvider>
    </GestureHandlerRootView>
  )
}
