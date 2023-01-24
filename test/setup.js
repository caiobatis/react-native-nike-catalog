global.__reanimatedWorkletInit = jest.fn()

require('react-native-reanimated/lib/reanimated2/jestUtils').setUpTests()

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper')

global.ReanimatedDataMock = {
  now: () => 0
}

jest.useFakeTimers()
