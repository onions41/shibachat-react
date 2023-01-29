// MUI
import styled from "@mui/material/styles/styled"
import Box from "@mui/material/Box"

// Internal imports
import LoginForm from "components/LoginForm"

const RouteContainer = styled(Box)({
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center"
})

export default function Login() {
  return (
    <RouteContainer>
      <LoginForm />
    </RouteContainer>
  )
}
