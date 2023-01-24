import React from 'react'

import { render } from 'test'

import { CustomStatusBar } from './'

describe('<CustomStatusBar />', () => {
  it('renders correctly', () => {
    const component = render(<CustomStatusBar />)

    expect(component.toJSON()).toMatchSnapshot()
  })
})
