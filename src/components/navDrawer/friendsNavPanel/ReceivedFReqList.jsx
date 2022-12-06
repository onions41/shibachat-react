// Module imports
import React from "react"
import { useMutation } from "@apollo/client"
import { Typography, IconButton, Stack, List } from "@mui/material"
import RefreshIcon from "@mui/icons-material/Refresh"

// Internal imports
import ReceivedFReqCard from "./ReceivedFReqCard"
import ACCEPT_F_REQUEST from "../../../graphql/mutations/AcceptFRequest"

export default function ReceivedFReqList({ me, meQuery }) {
  const [acceptFRequest] = useMutation(ACCEPT_F_REQUEST)

  return (
    <List dense={true}>
      <ListHeader meQuery={meQuery} />
      {me.receivedFRequests.map((fRequest) => (
        <ReceivedFReqCard
          fRequest={fRequest}
          acceptFRequest={acceptFRequest}
          // cancelFReqLoading={cancelFReqLoading}
          key={`friend-request-${fRequest.senderId}-${fRequest.receiverId}`}
        />
      ))}
    </List>
  )
}

function ListHeader({ meQuery }) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      spacing={1}
      sx={{ bgcolor: "primary.dark", px: 0.5, mb: 1 }}
    >
      <Typography sx={{ pl: 1.4, pt: 0.6 }}>You have friend requests</Typography>
      <IconButton onClick={meQuery}>
        <RefreshIcon />
      </IconButton>
    </Stack>
  )
}
