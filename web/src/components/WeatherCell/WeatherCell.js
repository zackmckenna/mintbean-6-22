export const QUERY = gql`
  query($zip: String!) {
    weather: getWeather(zip: $zip) {
      zip
      city
      conditions
      temp
      tempC
      icon
      wind
      humidity
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <span
    style={{
      backgroundColor: '#ffdfdf',
      color: '#990000',
      padding: '0.5rem',
      display: 'inline-block',
    }}
  >
    {error.message.replace('GraphQL error: ', '')}
  </span>
)

export const Success = ({ weather }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{weather.city}</div>
        <p className="text-gray-700 text-5xl">
          {weather.temp}&deg;F {weather.conditions}
        </p>
      </div>
      {weather.tempC}
      <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
        <img src={weather.icon} style={{ maxWidth: '4rem' }} />
      </span>
      <div className="px-6 py-4">
        <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          humidy {weather.humidity} %
        </span>
        <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          windspeed {weather.wind} m/s
        </span>
      </div>
    </div>
  )
}
