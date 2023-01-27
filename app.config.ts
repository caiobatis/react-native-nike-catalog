import { ExpoConfig } from '@expo/config-types'

const config: ExpoConfig = {
  name: 'react-native-nike-catalog',
  slug: 'nike-catalog',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff'
  },
  updates: {
    fallbackToCacheTimeout: 0
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
    bundleIdentifier: 'com.caiobatistalab.nikecatalog'
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#FFFFFF'
    },
    package: 'com.caiobatistalab.nikecatalog'
  },
  web: {
    favicon: './assets/favicon.png'
  },
  scheme: 'catalog',
  extra: {
    eas: {
      projectId: 'df8e5570-e2c0-424a-a5df-ebfc6d2ab1a7'
    },
    apiUrl: process.env.API_BASE_URL
  }
}

export default config
