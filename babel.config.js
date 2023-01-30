module.exports = function (api) {
  api.cache(true)

  return {
    plugins: [
      [
        'module:react-native-dotenv',
        {
          moduleName: '@env'
        }
      ],
      [
        'module-resolver',
        {
          root: ['.'],
          alias: {
            assets: './assets',
            test: './test',
            src: './src',
            atoms: './src/components/atoms',
            molecules: './src/components/molecules',
            organisms: './src/components/organisms',
            services: './src/services'
          }
        }
      ],
      // Reanimated plugin has to be the last item in the plugins array
      'react-native-reanimated/plugin'
    ],
    presets: ['babel-preset-expo', '@babel/preset-typescript']
  }
}
