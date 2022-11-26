// Module imports
import React from "react"
import styled from "styled-components"

// Internal imports
import RegisterForm from "../components/RegisterForm"

const RouteContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`

export default function Register() {
  return (
    <RouteContainer>
      <RegisterForm />
    </RouteContainer>
  )
}
