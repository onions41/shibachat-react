// Module imports
import React, {
  useState
} from 'react'
import { Container, Button } from '@mui/material'
import { useLazyQuery } from '@apollo/client'

// Internal imports
import LoginModal from '../components/LoginModal'
import { PROTECTED, UNPROTECTED } from '../graphql/queries/testQueries'

export default function Chat() {
  // Test query
  const [protectedQuery] = useLazyQuery(PROTECTED, { fetchPolicy: 'network-only' })
  const [unprotectedQuery] = useLazyQuery(UNPROTECTED, { fetchPolicy: 'network-only' })

  // This needs to be hoisted to Redux later
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const handleLogin = () => setIsLoggedIn(true)

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
      <LoginModal isOpen={!isLoggedIn} handleLogin={handleLogin} />
    </Container>
  )
}
