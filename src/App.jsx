// Module imports
import React, { useEffect, useState } from "react"
import Router from "./routes/Router"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"

// Internal imports
import { useDispatch } from "react-redux"
import { loginAction } from "./store"

/**
 * App is wrapped with StrictMode, ApolloProvider, ReduxProvider, and CSSBaseline (MUI) in index.js
 * App first tries to make contact with /refresh-token. If no contact can be made, App will not render
 * the rest of the application; it will just render an error page.
 * If a connection could be made with the server, the server either sent back new auth tokens or it didn't.
 * If it did, set isLoggedInState to true (which also store the access token),
 * then render the rest the application.
 * If it did not send back new tokens, do nothing (isLoggedIn state is false initally),
 * then render the rest of the application.
 */
export default function App() {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  const [fetchError, setFetchError] = useState(false)

  // Override default material theme
  const theme = createTheme({})

  useEffect(() => {
    fetch(process.env.REACT_APP_REFRESH_SERVER_URL, {
      method: "POST",
      credentials: "include"
    })
      .then(async (response) => {
        const { accessToken } = await response.json()
        if (accessToken) {
          dispatch(loginAction(accessToken))
        }
        setLoading(false)
      })
      .catch(() => {
        // Fetch only throws network errors. Ie, no connection could be made.
        setFetchError(true)
      })
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppContent
        loading={loading}
        error={fetchError}
      />
    </ThemeProvider>
  )
}

function AppContent({ loading, error }) {
  // TODO: Better loading screen
  if (loading) {
    return <div>Loading while App tries to log in</div>
  }

  // TODO: Better error screen
  if (error) {
    return <div>Could not reach the internet</div>
  }

  return <Router />
}
