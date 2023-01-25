import { render, waitFor } from 'test'

import { Header } from './'
import { HeaderProps } from './types'

describe('<Header />', () => {
  const commonProps: HeaderProps = {
    type: 'large'
  }

  it('renders correctly', () => {
    const component = render(<Header {...commonProps} />)

    expect(component.toJSON()).toMatchSnapshot()
  })

  describe('when type prop is defined with `small`', () => {
    it('should render the Header with new informations', async () => {
      const component = render(<Header {...commonProps} type="small" />)

      const searchArrowLeftIcon = await waitFor(() => component.findByTestId('ArrowLeftIcon'))

      expect(searchArrowLeftIcon).toBeTruthy()
    })

    it('should render the Header without informations', async () => {
      const component = render(<Header {...commonProps} type="small" />)

      const searchCartIcon = await waitFor(() => component.queryByTestId('CartIcon'))

      const searchTitle = await waitFor(() => component.queryByText('Just do it!'))

      const searchSubTitle = await waitFor(() =>
        component.queryByText('Sinta todo o seu potencial')
      )

      expect(searchCartIcon).toBeFalsy()

      expect(searchTitle).toBeFalsy()

      expect(searchSubTitle).toBeFalsy()
    })
  })
})
