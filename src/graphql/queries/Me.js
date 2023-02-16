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
      sentFRequests {
        senderId
        receiverId
        ...SentFRequestFragment
      }
      receivedFRequests {
        senderId
        receiverId
        ...ReceivedFRequestFragment
      }
      friends {
        id
        nickname
        latestMessageWithMe {
          createdAt
          textContent
        }
      }
    }
  }
`
