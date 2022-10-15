// Module imports
import React, {
  useState
} from 'react'
import { Container, Input, Button } from '@mui/material'
import { useQuery } from '@apollo/client'

// Internal imports
import EXAMPLE1 from '../graphql/queries/example'

export default function Chat() {
  const [value, setValue] = useState('')

  const { data, loading, error } = useQuery(EXAMPLE1)

  console.table(data, loading, error)

  return (
    <Container>
      <Input value={value} onChange={ (e) => setValue(e.target.value) } />
      <Button>
        Press Me!
      </Button>
    </Container>
  )
}
