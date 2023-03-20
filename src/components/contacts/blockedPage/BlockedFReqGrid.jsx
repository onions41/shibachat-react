import Box from "@mui/material/Box"
import { useMutation } from "@apollo/client"
import BlockedFReqCard from "./BlockedFReqCard"
import UNBLOCK_F_REQUEST from "graphql/mutations/UnblockFRequest"

export default function BlockedFReqGrid({ me }) {
  // meQuery cache is updating automatically as expected due to
  // response object being in the correct shape.
  const [unblockFRequest] = useMutation(UNBLOCK_F_REQUEST)

  return (
    <Box
      sx={{
        width: "98%",
        display: "grid",
        columnGap: "10px",
        gridTemplateColumns: "repeat(7, 1fr)"
      }}
    >
      {me.receivedFRequests.filter((fReq) => fReq.status === "BLOCKED").map((fReq) => (
        <BlockedFReqCard
          fReq={fReq}
          unblockFRequest={unblockFRequest}
          key={`sender-${fReq.senderId}`}
        />
      ))}
    </Box>
  )
}
