// Module imports
import { ApolloClient, InMemoryCache, from, split } from "@apollo/client"
import { getMainDefinition } from "@apollo/client/utilities"

// Internal imports
import httpLink from "./links/httpLink"
import authLink from "./links/authLink"
import tokenRefreshLink from "./links/tokenRefreshLink"
import wsLink from "./links/wsLink"

// Combines some of the links
const additiveLink = from([tokenRefreshLink, authLink, httpLink])

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query)
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    )
  },
  wsLink,
  additiveLink
)

// Creates client out of links
const apolloClient = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache({
    typePolicies: {
      FriendRequest: {
        keyFields: ["senderId", "receiverId"]
      }
    }
  })
})

export default apolloClient
