import { gql } from "@apollo/client"

export default gql`
  fragment FullMessageFragment on Message {
    # These always include __typename and keys in a fragment
    __typename
    id
    # And the rest
    createdAt
    receiverId
    senderId
    textContent
  }
`
