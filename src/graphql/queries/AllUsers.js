import { gql } from '@apollo/client'

export default gql`
  query AllUsers {
    users {
      id
      nickname
      receivedFReqFromMe
    }
  }
`
