import { gql } from "@apollo/client"

export default gql`
  query Messages($friendId: Int!) {
    messages(friendId: $friendId) {
      id
      createdAt
      receiverId
      senderId
      textContent
    }
  }
`
