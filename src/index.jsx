import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloProvider } from '@apollo/client'
import apolloClient from './graphql/apolloClient'
import CssBaseline from '@mui/material/CssBaseline'

import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <CssBaseline />
      <App />
    </ApolloProvider>
  </React.StrictMode>
)
