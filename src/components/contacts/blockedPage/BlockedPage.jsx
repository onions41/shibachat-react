import Typography from "@mui/material/Typography"
import BlockedFReqGrid from "./BlockedFReqGrid"

export default function BlockedPage({ me }) {
  return (
    <>
      {me.receivedFRequests.some((fReq) => fReq.status === "BLOCKED") ? (
        <>
          <Typography
            color="text.secondary"
            variant="h3"
            mt={2}
          >
            Blocked Friend Requests
          </Typography>
          <BlockedFReqGrid me={me} />
        </>
      ) : null}
      <Typography
        color="text.secondary"
        variant="h3"
        mt={2}
      >
        Blocked Friends
      </Typography>
      {/* TODO: Display blocked friends */}
    </>
  )
}
