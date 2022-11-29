// Module imports
import { gql } from "@apollo/client"

// Internal imports
import SentFRequestFragment from "../fragments/SentFRequestFragment"

export default gql`
  ${SentFRequestFragment}

  mutation CancelFRequest($friendId: Int!) {
    cancelFRequest(friendId: $friendId) {
      ...SentFRequestFragment
    }
  }
`
