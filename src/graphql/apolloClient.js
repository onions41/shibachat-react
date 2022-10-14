import {
  ApolloClient,
  InMemoryCache,
  from
} from '@apollo/client'

import httpLink from './links/httpLink'

// Combines some of the links
const additiveLink = from([
  httpLink
])

// Creates client out of links
const apolloClient = new ApolloClient({
  link: additiveLink,
  cache: new InMemoryCache()
})

export default apolloClient
