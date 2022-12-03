// Module imports
import React from "react"
import { useMutation } from "@apollo/client"
import { List } from "@mui/material"

// Internal imports
import CANCEL_F_REQUEST from "../../../graphql/mutations/CancelFRequest"
import SentFReqCard from "./SentFReqCard"
import SentFRequestFragment from "../../../graphql/fragments/SentFRequestFragment"

export default function SentFReqList({ me }) {
  // CancelFRequest mutation
  const [cancelFRequest, { loading: cancelFReqLoading }] = useMutation(
    CANCEL_F_REQUEST,
    {
      update(cache, { data }) {
        // Modifies the receivedFReqFromMe field of the cached user object to false
        cache.modify({
          // Uses mutation response data to id the user object to modify
          id: cache.identify(data.cancelFRequest.friend),
          fields: {
            receivedFReqFromMe: () => false
          }
        })

        // Removes the cancelled FRequest from the cache
        cache.modify({
          // Uses mutation response data to id the user object to modify
          id: cache.identify(me),
          fields: {
            sentFRequests(existingSentFRequestRefs = []) {
              const cancelledSentFRequestRef = cache.writeFragment({
                data: data.cancelFRequest,
                fragment: SentFRequestFragment
              })

              // Splice doesn't work. I think only a array copy method works (as apposed to a mutating method)
              return existingSentFRequestRefs.filter(
                // I didn't use readField because I find this to be cleaner (see example on reading and writing from cache)
                (ref) => ref.__ref !== cancelledSentFRequestRef.__ref
              )
            }
          }
        })
      }
    }
  )

  return (
    <List dense={false}>
      {me.sentFRequests.map((fRequest) => (
        <SentFReqCard
          fRequest={fRequest}
          cancelFRequest={cancelFRequest}
          cancelFReqLoading={cancelFReqLoading}
          key={`friend-request-${fRequest.senderId}-${fRequest.receiverId}`}
        />
      ))}
    </List>
  )
}
