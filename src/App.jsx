import React from 'react'
import { ApolloProvider } from '@apollo/client'

import apolloClient from './graphql/apolloClient'

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <div>What is up man</div>
    </ApolloProvider>
  )
}

export default App
