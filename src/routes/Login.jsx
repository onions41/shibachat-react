// Module imports
import React from 'react'
import styled from 'styled-components'

// Internal imports
import LoginForm from '../components/LoginForm'

const RouteContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`

export default function Login() {
  return (
    <RouteContainer>
      <LoginForm />
    </RouteContainer>
  )
}
