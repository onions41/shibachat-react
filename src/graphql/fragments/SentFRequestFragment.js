import { gql } from "@apollo/client"

export default gql`
  fragment SentFRequestFragment on FriendRequest {
    __typename
    senderId
    receiverId
    receiver {
      id
      nickname
    }
    status
  }
`
