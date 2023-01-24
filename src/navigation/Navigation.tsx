import { FunctionComponent } from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'
import { useColorMode, useColorModeValue, useTheme } from 'native-base'

import { HomeScreen } from '../screens'
import { RootStackParamList } from './types'

const NativeStackNavigator = createNativeStackNavigator<RootStackParamList>()

export const Navigation: FunctionComponent = () => {
  const colorMode = useColorMode()

  const theme = useTheme()

  const backgroundColor = useColorModeValue(
    theme.colors.lightBackground,
    theme.colors.darkBackground
  )

  const headerTintColor = useColorModeValue(theme.colors.darkText, theme.colors.lightText)

  return (
    <NavigationContainer>
      <StatusBar style={colorMode.colorMode === 'dark' ? 'light' : 'dark'} />

      <NativeStackNavigator.Navigator
        screenOptions={{
          contentStyle: { backgroundColor },
          headerShadowVisible: false,
          headerStyle: { backgroundColor },
          headerTintColor,
          headerBackTitleVisible: false,
          title: ''
        }}>
        <NativeStackNavigator.Screen
          component={HomeScreen}
          name="Home"
          options={{ headerShown: false }}
        />
      </NativeStackNavigator.Navigator>
    </NavigationContainer>
  )
}
