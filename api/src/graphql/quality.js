export const schema = gql`
  type Quality {
    zip: String!
    discussion: String
    aqi: Int!
    description: String!
    color: String!
  }

  type Query {
    getQuality(zip: String!): Quality!
  }
`
