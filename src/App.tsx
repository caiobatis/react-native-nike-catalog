import { FunctionComponent } from 'react'

import 'intl'
import 'intl/locale-data/jsonp/pt-BR'

import { enableFreeze } from 'react-native-screens'

import { AppProviders } from './AppProviders'
import { Navigation } from './navigation'

enableFreeze(true)

export const App: FunctionComponent = () => (
  <AppProviders>
    <Navigation />
  </AppProviders>
)
