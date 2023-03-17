import { gql } from "@apollo/client"

import ReceivedFRequestFragment from "../fragments/ReceivedFRequestFragment"

export default gql`
  ${ReceivedFRequestFragment}

  mutation BlockFRequest($senderId: Int!) {
    blockFRequest(senderId: $senderId) {
      ...ReceivedFRequestFragment
    }
  }
`
