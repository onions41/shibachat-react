import { useMutation } from "@apollo/client"
import Box from "@mui/material/Box"
import ReceivedFReqCard from "./ReceivedFReqCard"
import ACCEPT_F_REQUEST from "graphql/mutations/AcceptFRequest"
import REJECT_F_REQUEST from "graphql/mutations/RejectFRequest"

export default function ReceivedFReqCarousel({ me }) {
  const [acceptFRequest] = useMutation(ACCEPT_F_REQUEST)
  const [rejectFRequest] = useMutation(REJECT_F_REQUEST)

  return (
    <Box sx={{ padding: "8px", display: "flex", flexDirection: "row" }}>
      {me.receivedFRequests.map((fReq) => (
        <ReceivedFReqCard
          fReq={fReq}
          acceptFRequest={acceptFRequest}
          rejectFRequest={rejectFRequest}
          // cancelFReqLoading={cancelFReqLoading}
          key={`senderId-${fReq.senderId}`}
        />
      ))}
    </Box>
  )
}
