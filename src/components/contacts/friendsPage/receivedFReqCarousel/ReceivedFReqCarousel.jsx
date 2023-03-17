import { useMutation } from "@apollo/client"
import Box from "@mui/material/Box"
import ReceivedFReqCard from "./ReceivedFReqCard"
import ACCEPT_F_REQUEST from "graphql/mutations/AcceptFRequest"
import BLOCK_F_REQUEST from "graphql/mutations/BlockFRequest"

export default function ReceivedFReqCarousel({ me }) {
  const [acceptFRequest] = useMutation(ACCEPT_F_REQUEST)
  const [blockFRequest] = useMutation(BLOCK_F_REQUEST)

  return (
    <Box sx={{ padding: "8px", display: "flex", flexDirection: "row" }}>
      {me.receivedFRequests.map(
        (fReq) =>
          fReq.status === "PENDING" && (
            <ReceivedFReqCard
              fReq={fReq}
              acceptFRequest={acceptFRequest}
              blockFRequest={blockFRequest}
              // cancelFReqLoading={cancelFReqLoading}
              key={`senderId-${fReq.senderId}`}
            />
          )
      )}
    </Box>
  )
}
