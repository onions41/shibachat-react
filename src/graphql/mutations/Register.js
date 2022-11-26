import { gql } from "@apollo/client"

const REGISTER = gql`
  mutation Register($nickname: String!, $password: String!) {
    register(nickname: $nickname, password: $password)
  }
`

export default REGISTER
