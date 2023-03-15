import { gql } from "@apollo/client"

import ReceivedFRequestFragment from "../fragments/ReceivedFRequestFragment"

export default gql`
  mutation BlockFRequest($senderId: Int!) {
    ${ReceivedFRequestFragment}
    
    blockFRequest(senderId: $senderId) {
      senderId
      receiverId
      ...ReceivedFRequestFragment
    }
  }
`
