// Module imports
import React from 'react'
import { Container, Button } from '@mui/material'
import { useLazyQuery } from '@apollo/client'
import { useSelector } from 'react-redux'

// Internal imports
import LoginModal from '../components/LoginModal'
import { PROTECTED, UNPROTECTED } from '../graphql/queries/testQueries'
import { selectIsLoggedIn } from '../store'

export default function Home() {
  // Test queries
  const [protectedQuery] = useLazyQuery(PROTECTED, { fetchPolicy: 'network-only' })
  const [unprotectedQuery] = useLazyQuery(UNPROTECTED, { fetchPolicy: 'network-only' })

  // Redux
  const isLoggedIn = useSelector(selectIsLoggedIn)

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
      {/* need to get from redux */}
      <LoginModal isOpen={!isLoggedIn} />
    </Container>
  )
}
