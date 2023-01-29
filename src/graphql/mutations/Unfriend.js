// Module imports
import { gql } from "@apollo/client"

// Internal imports
// import SentFRequestFragment from "../fragments/SentFRequestFragment"

export default gql`  
  mutation Unfriend($friendId: Int!) {
    unfriend(friendId: $friendId) {
      id
      nickname   
    }
  }
`
