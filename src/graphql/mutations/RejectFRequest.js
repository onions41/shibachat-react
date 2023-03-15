import { gql } from "@apollo/client"

import ReceivedFRequestFragment from "../fragments/ReceivedFRequestFragment"

export default gql`
  mutation RejectFRequest($senderId: Int!) {
    ${ReceivedFRequestFragment}
    
    rejectFRequest(senderId: $senderId) {
      senderId
      receiverId
      ...ReceivedFRequestFragment
    }
  }
`
