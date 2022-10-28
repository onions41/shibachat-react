import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloProvider } from '@apollo/client'
import apolloClient from './graphql/apolloClient'
import CssBaseline from '@mui/material/CssBaseline'
import { Provider as ReduxProvider } from 'react-redux'
import store from './store'

import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <ReduxProvider store={store}>
        <CssBaseline />
        <App />
      </ReduxProvider>
    </ApolloProvider>
  </React.StrictMode>
)
