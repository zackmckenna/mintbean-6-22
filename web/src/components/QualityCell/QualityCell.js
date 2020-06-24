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
    <section>
      <h1>{quality.aqi}</h1>
      <h2>
        <span>{quality.discussion.split('***')[0]}</span>
      </h2>
    </section>
  )
}
