// Module imports
import React from "react"
import { List } from "@mui/material"
import { useMutation } from "@apollo/client"

// Internal imports
import ReceivedFReqCard from "./ReceivedFReqCard"
import ACCEPT_F_REQUEST from "../../../graphql/mutations/AcceptFRequest"

export default function ReceivedFReqList({ me }) {
  const [acceptFRequest] = useMutation(ACCEPT_F_REQUEST)

  return (
    <List dense={true}>
      {me.receivedFRequests.map((fRequest) => (
        <ReceivedFReqCard
          fRequest={fRequest}
          acceptFRequest={acceptFRequest}
          // cancelFReqLoading={cancelFReqLoading}
          key={`friend-request-${fRequest.meId}-${fRequest.friendId}`}
        />
      ))}
    </List>
  )
}
