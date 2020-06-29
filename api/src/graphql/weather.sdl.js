export const schema = gql`
  type Weather {
    zip: String!
    city: String!
    conditions: String!
    temp: Int!
    tempF: Int!
    tempC: Int!
    icon: String!
    wind: Float!
    humidity: Float!
  }

  type Query {
    getWeather(zip: String!): Weather!
  }
`
