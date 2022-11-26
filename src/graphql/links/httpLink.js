import { HttpLink } from "@apollo/client"

// Apollo HTTP Link
const httpLink = new HttpLink({
  uri: process.env.REACT_APP_GRAPHQL_SERVER_URL,
  credentials: "include"
})

export default httpLink
