import { gql } from "@apollo/client"
import FullMessageFragment from "graphql/fragments/FullMessageFragment"

export default gql`
  ${FullMessageFragment}

  subscription NewMessage($friendId: Int!) {
    newMessage(friendId: $friendId) {
      ...FullMessageFragment
    }
  }
`
