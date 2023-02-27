import Box from "@mui/material/Box"
import Avatar from "@mui/material/Avatar"
import Typography from "@mui/material/Typography"

function ReceivedFReqCard({ fReq }) {
  return (
    <Box
      sx={{
        width: "85px",
        margin: "0 8px",
        backgroundColor: "background.white",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "border.gray",
        borderRadius: "8px"
      }}
    >
      <Avatar
        sx={{
          width: 37,
          height: 37,
          margin: "19px auto 12px",
          gridRow: "span 2",
          justifySelf: "center"
        }}
        alt="#"
        src="#"
      />
      <Typography
        sx={{ textAlign: "center", marginBottom: "12px", fontSize: "0.9rem" }}
      >
        {fReq.sender.nickname}
      </Typography>
    </Box>
  )
}

export default function ReceivedFReqCarousel({ me }) {
  return (
    <Box sx={{ padding: "8px", display: "flex", flexDirection: "row" }}>

      {me.receivedFRequests.map((fReq) => <ReceivedFReqCard fReq={fReq} key={`senderId-${fReq.senderId}`} />)}
    </Box>
  )
}
