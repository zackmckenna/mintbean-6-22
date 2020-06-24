import { render } from '@redwoodjs/testing'

import BasicLayout from './BasicLayout'

describe('BasicLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BasicLayout />)
    }).not.toThrow()
  })
})
