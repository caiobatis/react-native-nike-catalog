import { render } from 'test'

import Icons from './'

describe('Icons', () => {
  for (const property in Icons) {
    it('renders correctly', () => {
      // @ts-ignore
      const Component = Icons[property] as typeof Icons.Search

      expect(render(<Component />).toJSON()).toMatchSnapshot()
    })
  }
})
