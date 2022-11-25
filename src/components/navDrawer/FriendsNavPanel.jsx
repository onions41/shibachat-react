// Modudule imports
import React from 'react'
import { useQuery } from '@apollo/client'

// External imports
import FriendRequestsList from './FriendRequestsList'
import ME from '../../graphql/queries/Me'

export default function FriendsNavPanel() {
  /**
   * GQL Hooks
   */
  const { data: meData, error: meError, loading: meLoading } = useQuery(ME)

  if (meLoading) {
    return <div style={{ width: '100%' }}>Loading the Me query</div>
  }
  if (meError) {
    console.log('***Me query error: ', meError)
    return <div style={{ width: '100%' }}>Me query threw an error</div>
  } // data was fetched successfully

  const { user: { receivedFRequests } } = meData

  return (
    <div>
      <FriendRequestsList requests={receivedFRequests} />
    </div>
  )
}
