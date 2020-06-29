export const QUERY = gql`
  query {
    posts {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ posts }) => {
  return posts.map((post) => {
    return (
      <article className="block bg-blue-200 p-4 mx-auto" key={post.id}>
        <header>
          <h2 className="text-lg font-bold">{post.title}</h2>
          <p>{post.body}</p>
          <p className="text-xs font-hairline">{post.createdAt}</p>
        </header>
      </article>
    )
  })
}
