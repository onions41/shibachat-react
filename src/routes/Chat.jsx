// Module imports
import React from 'react'
import { Container, Button } from '@mui/material'
import { useLazyQuery } from '@apollo/client'

// Internal imports
import { PROTECTED, UNPROTECTED } from '../graphql/queries/testQueries'

export default function Chat() {
  // Test queries
  const [protectedQuery] = useLazyQuery(PROTECTED, { fetchPolicy: 'network-only' })
  const [unprotectedQuery] = useLazyQuery(UNPROTECTED, { fetchPolicy: 'network-only' })

  return (
    <Container>
      <Button
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onMouseUp={protectedQuery}
      >
        Protected
      </Button>
      <Button
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onMouseUp={unprotectedQuery}
      >
        Unprotected
      </Button>
    </Container>
  )
}
