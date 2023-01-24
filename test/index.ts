import { render } from '@testing-library/react-native'
// import { AppProviders } from 'src/AppProviders'

const customRender: typeof render = (ui, options) =>
  render(ui, {
    // wrapper: AppProviders,
    ...options
  })

export * from '@testing-library/react-native'

export { customRender as render }
