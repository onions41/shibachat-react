import { gql } from '@apollo/client'

export default gql`
  query Me {
    user {
      id
      nickname
      receivedFRequests {
        id
        nickname
      }
    }
  }
`
