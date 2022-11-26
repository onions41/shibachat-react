import { gql } from "@apollo/client"

const LOGOUT = gql`
  mutation Logout {
    logout
  }
`

export default LOGOUT
