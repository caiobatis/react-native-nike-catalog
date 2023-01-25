import { render, waitFor } from 'test'

import { Toast } from './'
import { ToastProps } from './types'

describe('<Toast />', () => {
  const commonProps: ToastProps = {
    type: 'error',
    text: 'my text'
  }

  it('renders correctly', () => {
    const component = render(<Toast {...commonProps} />)

    expect(component.toJSON()).toMatchSnapshot()
  })

  describe('when type prop is defined with `error`', () => {
    it('should render the Toast with bgColor correctly', async () => {
      const component = render(<Toast {...commonProps} type="error" />)

      const search = (await component.findByTestId('ToastBox')).props?.style

      // #dc2626 === error.600
      expect(search).toHaveProperty('backgroundColor', '#dc2626')
    })

    it('should render the Toast with the Icon correctly', async () => {
      const component = render(<Toast {...commonProps} type="error" />)

      const search = await waitFor(() => component.findByTestId('ThumbsDownIcon'))

      expect(search).toBeTruthy()
    })
  })

  describe('when text prop is defined', () => {
    it('should render the Toast with my text correctly', async () => {
      const myText = 'the new text here'

      const component = render(<Toast {...commonProps} text={myText} />)

      const search = await waitFor(() => component.findByText(myText))

      expect(search).toBeTruthy()
    })
  })
})
