// Module imports
import React from "react"
import { List } from "@mui/material"

// Internal imports
import ReceivedFReqCard from "./ReceivedFReqCard"

export default function ReceivedFReqList({ me }) {
  return (
    <List dense={true}>
      {me.receivedFRequests.map((fRequest) => (
        <ReceivedFReqCard
          fRequest={fRequest}
          // cancelFRequest={cancelFRequest}
          // cancelFReqLoading={cancelFReqLoading}
          key={`friend-request-${fRequest.meId}-${fRequest.friendId}`}
        />
      ))}
    </List>
  )
}
