// Module imports
import styled from "styled-components"
import { useSelector, useDispatch } from "react-redux"
import { Typography, Link, Button } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import { useMutation, useLazyQuery } from "@apollo/client"

// Internal imports
import { selectIsLoggedIn, logoutAction } from "../store/authSlice"
import { PROTECTED, UNPROTECTED } from "../graphql/queries/testQueries"
import LOGOUT from "../graphql/mutations/Logout"
import { openAction, closeAction } from "../store/toastSlice"

// Stays at the bottom of the window out of normal flow.
const DevBarContainer = styled.div`
  width: 100%;
  height: 50px;
  color: #77bc65;
  background-color: #23353b;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
`
/**
 * This is a component that displays some links and login state and whatnot
 * that I use for development
 */
export default function DevBar() {
  // Redux
  const isLoggedIn = useSelector(selectIsLoggedIn)
  const dispatch = useDispatch()

  // Test queries
  const [protectedQuery] = useLazyQuery(PROTECTED, {
    fetchPolicy: "network-only"
  })
  const [unprotectedQuery] = useLazyQuery(UNPROTECTED, {
    fetchPolicy: "network-only"
  })

  // Logout mutation
  const [logout] = useMutation(LOGOUT, { fetchPolicy: "network-only" })

  return (
    <DevBarContainer>
      <Typography>{`isLoggedIn: ${isLoggedIn}`}</Typography>
      <Link
        component={RouterLink}
        to="/"
      >
        Home
      </Link>
      <Link
        component={RouterLink}
        to="/register"
      >
        Register
      </Link>
      <Button
        onClick={() => {
          logout().then(() => dispatch(logoutAction()))
        }}
      >
        Logout
      </Button>
      <Button onClick={() => protectedQuery()}>Protected</Button>
      <Button onClick={() => unprotectedQuery()}>Unprotected</Button>
      <Button
        onClick={() =>
          dispatch(
            openAction({
              atBottom: false,
              message: "this is the message now 333"
            })
          )
        }
      >
        Toast On
      </Button>
      <Button onClick={() => dispatch(closeAction())}>Toast Off</Button>
    </DevBarContainer>
  )
}
