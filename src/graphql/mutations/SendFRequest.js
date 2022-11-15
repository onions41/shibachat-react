import { gql } from '@apollo/client'

export default gql`
  mutation SendFRequest($friendId: Int!) {
    sendFriendRequest(friendId: $friendId) {
      id
      nickname
    }
  }
`
