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
        senderId
        receiverId
        ...ReceivedFRequestFragment
      }
      sentFRequests {
        senderId
        receiverId
        ...SentFRequestFragment
      }
    }
  }
`
