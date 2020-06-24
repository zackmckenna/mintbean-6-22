export const QUERY = gql`
  query($zip: String!) {
    quality: getQuality(zip: $zip) {
      zip
      aqi
      discussion
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ quality }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{quality.aqi}</div>
        <p className="text-gray-700 text-5xl">{quality.aqi}</p>
      </div>

      <div className="px-6 py-4">
        {/* <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          humidy {weather.humidity} %
        </span>
        <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          windspeed {weather.wind} m/s
        </span> */}
        <div>{quality.discussion}</div>
      </div>
    </div>
  )
}
