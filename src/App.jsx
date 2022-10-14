import React, { useState } from 'react'
import { ApolloProvider } from '@apollo/client'
import apolloClient from './graphql/apolloClient'
import { Container, Input, Button } from '@mui/material'

function App() {
  const [value, setValue] = useState('')

  return (
    <ApolloProvider client={apolloClient}>
      <Container>
        <Input value={value} onChange={ (e) => setValue(e.target.value) } />
        <Button>
          Press Me!
        </Button>
      </Container>
    </ApolloProvider>
  )
}

export default App
