export const schema = gql`
  type Quality {
    zip: String!
    discussion: String!
    aqi: Int!
  }

  type Query {
    getQuality(zip: String!): Quality!
  }
`
