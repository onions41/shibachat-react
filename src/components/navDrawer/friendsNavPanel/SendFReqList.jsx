// Module imports
import React from "react"
import { List } from "@mui/material"
import { useQuery, useMutation } from "@apollo/client"

// Internal imports
import ALL_USERS from "../../../graphql/queries/AllUsers"
import SEND_F_REQUEST from "../../../graphql/mutations/SendFRequest"
import SentFRequestFragment from "../../../graphql/fragments/SentFRequestFragment"
import SendFReqCard from "./SendFReqCard"

export default function SendFReqList({ me }) {
  // AllUsers Query
  const {
    data: allUsersData,
    loading: allUsersLoading,
    error: allUsersError
  } = useQuery(ALL_USERS, { fetchPolicy: "network-only" })

  // SendFRequest mutation
  const [sendFRequest, { loading: sendFReqLoading }] = useMutation(
    SEND_F_REQUEST,
    {
      update(cache, { data }) {
        // Modifies the receivedFReqFromMe field of the cached user object to true
        cache.modify({
          // Uses mutation response data to id the user object to modify
          id: cache.identify(data.sendFRequest.friend),
          fields: {
            receivedFReqFromMe: () => true
          }
        })

        // Adds the newSentFRequest to the sentFRequests cache
        cache.modify({
          // Uses mutation response data to id the user object to modify
          id: cache.identify(me),
          fields: {
            sentFRequests(existingSentFRequestRefs = []) {
              const newSentFRequestRef = cache.writeFragment({
                data: data.sendFRequest,
                fragment: SentFRequestFragment
              })

              if (
                existingSentFRequestRefs.some(
                  (ref) => ref.__ref === newSentFRequestRef.__ref
                )
              ) {
                return existingSentFRequestRefs
              }

              return [...existingSentFRequestRefs, newSentFRequestRef]
            }
          }
        })
      }
    }
  )

  if (allUsersLoading) {
    return <div>AllUsersQuery is loading</div>
  }

  if (allUsersError) {
    console.log(allUsersError)
    return <div>AllUsersQuery throw error. Logged in console.</div>
  }

  // List of all users with button to send a friend request
  return (
    <List dense={false}>
      {allUsersData.users.map((user) =>
        // Don't render the current user's card
        user.id !== me.id
          ? (
            <SendFReqCard
              user={user}
              sendFRequest={sendFRequest}
              sendFReqLoading={sendFReqLoading}
              key={`send-request-${user.id}`}
            />
            )
          : null
      )}
    </List>
  )
}
