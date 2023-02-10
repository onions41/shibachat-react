// Module imports
import React from "react"
import ReactDOM from "react-dom/client"
import { ApolloProvider } from "@apollo/client"
import { Provider as ReduxProvider } from "react-redux"
import ThemeProvider from "@mui/material/styles/ThemeProvider"
import CssBaseline from "@mui/material/CssBaseline"

// Internal imports
import apolloClient from "graphql/apolloClient"
import store from "./store/store"
import theme from "theme/theme"
import App from "./App"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  // <React.StrictMode>
  <ApolloProvider client={apolloClient}>
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </ReduxProvider>
  </ApolloProvider>
  // </React.StrictMode>
)
