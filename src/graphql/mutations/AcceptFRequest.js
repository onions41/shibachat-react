// Module imports
import { gql } from "@apollo/client"

// Internal imports

export default gql`
  mutation AcceptFRequest($senderId: Int!) {
    acceptFRequest(senderId: $senderId) {
      acceptedFRequest {
        # you will get invariant violation 2 if you don't include both combo keys
        # this is because of the typePolicy you declared on the cache for FriendRequests, it needs both combo keys to cache
        receiverId
        senderId
      }
      friend {
        id
        nickname
      }
    }
  }
`
