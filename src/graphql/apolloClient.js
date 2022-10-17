import {
  ApolloClient,
  InMemoryCache,
  from
} from '@apollo/client'

import httpLink from './links/httpLink'
import authLink from './links/authLink'

// Combines some of the links
const additiveLink = from([
  authLink,
  httpLink
])

// Creates client out of links
const apolloClient = new ApolloClient({
  link: additiveLink,
  cache: new InMemoryCache()
})

export default apolloClient
