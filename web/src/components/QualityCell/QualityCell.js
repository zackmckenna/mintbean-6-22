export const QUERY = gql`
  query($zip: String!) {
    quality: getQuality(zip: $zip) {
      zip
      aqi
      discussion
      description
      color
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ quality }) => {
  return (
    <div className="max-w-screen-sm rounded mt-3 overflow-hidden shadow-lg">
      <div style={{ backgroundColor: quality.color }} className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Air Quality Index</div>
        <p className="text-gray-700 text-5xl">{quality.aqi}</p>
        {quality.description}
      </div>
      <div className="px-6 py-4">
        <div>{quality.discussion}</div>
      </div>
    </div>
  )
}
