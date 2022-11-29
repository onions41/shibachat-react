import { ApolloClient, InMemoryCache, from } from "@apollo/client"

import httpLink from "./links/httpLink"
import authLink from "./links/authLink"
import tokenRefreshLink from "./links/tokenRefreshLink"

// Combines some of the links
const additiveLink = from([tokenRefreshLink, authLink, httpLink])

// Creates client out of links
const apolloClient = new ApolloClient({
  link: additiveLink,
  cache: new InMemoryCache({
    typePolicies: {
      FriendRequest: {
        keyFields: ["meId", "friendId"]
      }
    }
  })
})

export default apolloClient
