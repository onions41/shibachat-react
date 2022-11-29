// Module imports
import { gql } from "@apollo/client"

// Internal imports
import SentFRequestFragment from "../fragments/SentFRequestFragment"
import ReceivedFRequestFragment from "../fragments/ReceivedFRequestFragment"

export default gql`
  ${SentFRequestFragment}
  ${ReceivedFRequestFragment}
  
  query Me {
    user {
      id
      nickname
      receivedFRequests {
        meId # me is the sender of the request
        friendId
        ...ReceivedFRequestFragment
      }
      sentFRequests {
        meId # me is the sender of the request
        friendId
        ...SentFRequestFragment
      }
    }
  }
`
