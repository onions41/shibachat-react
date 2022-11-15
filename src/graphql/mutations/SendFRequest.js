import { gql } from '@apollo/client'

export default gql`
  mutation SendFRequest($friendId: Int!) {
    sendFRequest(friendId: $friendId) {
      id
      nickname
    }
  }
`
