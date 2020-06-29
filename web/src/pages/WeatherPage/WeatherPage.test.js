import { render } from '@redwoodjs/testing'

import WeatherPage from './WeatherPage'

describe('WeatherPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WeatherPage />)
    }).not.toThrow()
  })
})
