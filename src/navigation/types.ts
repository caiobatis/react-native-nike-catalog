import { FunctionComponent } from 'react'

import { NativeStackScreenProps } from '@react-navigation/native-stack'

export type RootStackParamList = {
  Home: undefined
  Cart: undefined
}

export type RootStackScreenComponentProps<RouteName extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, RouteName>

export type RootStackScreenComponent<RouteName extends keyof RootStackParamList> =
  FunctionComponent<Partial<RootStackScreenComponentProps<RouteName>>>
