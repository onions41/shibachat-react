// Module imports
import React, {
  useState
} from 'react'
import { Container, Input, Button } from '@mui/material'

// Internal imports
import LoginModal from '../components/LoginModal'

export default function Chat() {
  const [value, setValue] = useState('')
  // This needs to be hoisted to Redux later
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const handleLogin = () => setIsLoggedIn(true)

  return (
    <Container>
      <Input value={value} onChange={ (e) => setValue(e.target.value) } />
      <Button>
        Press Me!
      </Button>
      <LoginModal isOpen={!isLoggedIn} handleLogin={handleLogin} />
    </Container>
  )
}
