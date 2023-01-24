import 'react-native-gesture-handler/jestSetup'

global.__reanimatedWorkletInit = jest.fn()

require('react-native-reanimated/lib/reanimated2/jestUtils').setUpTests()

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper')

global.ReanimatedDataMock = {
  now: () => 0
}

jest.useFakeTimers()

// include this section and the NativeAnimatedHelper section for mocking react-native-reanimated
jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock')

  Reanimated.default.call = () => {}

  return Reanimated
})
