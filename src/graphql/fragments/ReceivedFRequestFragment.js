import { gql } from "@apollo/client"

export default gql`
  fragment ReceivedFRequestFragment on FriendRequest {
    # These always include __typename and keys in a fragment
    # (combo key in this case).
    __typename
    meId
    friendId
    # And the rest
    me { # Is the sender of a request.
      id
      nickname
    }
    status
  }
`
