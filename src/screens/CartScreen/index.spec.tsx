import { render, renderHook } from 'test'

import { CartScreen } from './'
import { useCart } from './hook'
import { CartProps } from './types'

describe('<CartScreen />', () => {
  const commonProps: CartProps = {}

  it('renders correctly', () => {
    const component = render(<CartScreen {...commonProps} />)

    expect(component.toJSON()).toMatchSnapshot()
  })
})

describe('CartScreen hook', () => {
  it('renders correctly', () => {
    const { result } = renderHook(useCart)

    expect(result.current).toHaveProperty('handleCheckout')
  })
})
