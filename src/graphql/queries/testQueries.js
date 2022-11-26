import { gql } from "@apollo/client"

const PROTECTED = gql`
  query Protected {
    protected
  }
`

const UNPROTECTED = gql`
  query Unprotected {
    unprotected
  }
`

export { PROTECTED, UNPROTECTED }
