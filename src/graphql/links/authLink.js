// Module imports
import { ApolloLink } from "@apollo/client"

// Internal imports
import { getAccessToken } from "../../accessToken"

const authLink = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers }) => ({
    headers: {
      "access-token": getAccessToken(),
      ...headers
    }
  }))
  return forward(operation)
})

export default authLink
