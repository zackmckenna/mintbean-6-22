import { Link, routes } from '@redwoodjs/router'

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
    <div className="max-w-screen-sm border rounded mt-3 overflow-hidden shadow-lg">
      <div style={{ backgroundColor: quality.color }} className="px-6 py-4">
        <div className="font-bold text-xl text-gray-100 mb-2">
          Air Quality Index
        </div>
        <p className="text-gray-100 text-5xl">{quality.aqi}</p>
        <p className="text-gray-100">{quality.description}</p>
      </div>
      <div className="px-6 py-4">
        {quality.discussion && (
          <h2 className="text-lg font-bold mb-2">
            <Link className="text-teal-600" to={routes.about()}>
              Air Quality
            </Link>{' '}
            Description
          </h2>
        )}
        <div>{quality.discussion}</div>
      </div>
    </div>
  )
}
