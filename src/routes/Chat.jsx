// Module imports
import React from 'react'
import { Container } from '@mui/material'
import { useQuery, useMutation } from '@apollo/client'

// Internal imports
import UsersList from '../components/UsersList'
import ALL_USERS from '../graphql/queries/AllUsers'
import SEND_FRIEND_REQUEST from '../graphql/mutations/SendFRequest'

export default function Chat() {
  const { data, loading, error } = useQuery(ALL_USERS)
  const [sendRequest] = useMutation(SEND_FRIEND_REQUEST)

  const handleSend = (friendId) => {
    sendRequest({
      variables: {
        friendId
      }
    })
  }

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>The GQL fetch threw errors</div>
  }

  // data was successfully fetched
  return (
    <Container>
      <UsersList users={data.users} handleSend={handleSend} />
    </Container>
  )
}
