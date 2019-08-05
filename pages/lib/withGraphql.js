import withApollo from 'next-with-apollo'
import ApolloClient, { InMemoryCache } from 'apollo-boost'

export default withApollo(
  ({ ctx, headers, initialState }) =>
    new ApolloClient({
      uri: `${process.env.SELF_URL}/apis/graphql`,
      cache: new InMemoryCache().restore(initialState || {})
    })
)
