import { gql } from "@apollo/client"

export default gql`
  fragment SentFRequestFragment on FriendRequest {
    __typename
    meId
    friendId
    friend {
      id
      nickname
    }
    status
  }
`
