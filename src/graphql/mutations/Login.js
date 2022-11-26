import { gql } from "@apollo/client"

const LOGIN = gql`
  mutation Login($nickname: String!, $password: String!) {
    login(nickname: $nickname, password: $password)
  }
`

export default LOGIN
