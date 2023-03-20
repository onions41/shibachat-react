import { gql } from "@apollo/client"

import ReceivedFRequestFragment from "../fragments/ReceivedFRequestFragment"

export default gql`
  ${ReceivedFRequestFragment}

  mutation UnblockFRequest($senderId: Int!) {
    unblockFRequest(senderId: $senderId) {
      ...ReceivedFRequestFragment
    }
  }
`
