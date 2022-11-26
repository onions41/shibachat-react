// Module imports
import { gql } from "@apollo/client"

// Internal imports
import SentFRequestFragment from "../fragments/SentFRequestFragment"

export default gql`
 ${SentFRequestFragment}
  query Me {
    user {
      id
      nickname
      receivedFRequests {
        meId # me is the sender of the request
        friendId
        me {
          nickname
        }
        status
      }
      sentFRequests {
        meId # me is the sender of the request
        friendId
        ...SentFRequestFragment
      }
    }
  }
`
