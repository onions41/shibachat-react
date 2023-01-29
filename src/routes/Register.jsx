// Module imports
import styled from "@mui/material/styles/styled"
import Box from "@mui/material/Box"

// Internal imports
import RegisterForm from "../components/RegisterForm"

const RouteContainer = styled(Box)({
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center"
})

export default function Register() {
  return (
    <RouteContainer>
      <RegisterForm />
    </RouteContainer>
  )
}
