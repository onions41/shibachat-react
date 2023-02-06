// Module imports
import { gql } from "@apollo/client"

export default gql`
  mutation Mutation($receiverId: Int!, $textContent: String!) {
    sendMessage(receiverId: $receiverId, textContent: $textContent) {
      createdAt
    }
  }
`
