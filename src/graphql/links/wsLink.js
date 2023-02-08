import { GraphQLWsLink } from "@apollo/client/link/subscriptions"
import { createClient } from "graphql-ws"
import { getAccessToken } from "../../accessToken"

// Apollo Link for subscriptions (websocket)
const wsLink = new GraphQLWsLink(
  createClient({
    url: process.env.REACT_APP_SUBSCRIPTION_SERVER_URL,
    connectionParams: () => ({ "access-token": getAccessToken() }) // had to pass function because accessToken is fetched after this link is created
  })
)

export default wsLink
