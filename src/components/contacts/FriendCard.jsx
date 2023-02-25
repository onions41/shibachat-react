import Box from "@mui/material/Box"
import Avatar from "@mui/material/Avatar"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import MoreVertIcon from "@mui/icons-material/MoreVert"

import formatDateShort from "utility/formatDateShort"

export default function FriendCard({ friend }) {
  let msgStr = "Send this inu a message"
  if (friend.latestMessageWithMe) {
    const createdAtDateObj = new Date(
      parseInt(friend.latestMessageWithMe.createdAt, 10)
    )
    msgStr = `${formatDateShort(createdAtDateObj)}: ${friend.latestMessageWithMe.textContent}`
  }

  return (
    <Box
      sx={{
        height: "100px",
        margin: "8px 0",
        backgroundColor: "background.white",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "border.gray",
        borderRadius: "8px",
        display: "grid",
        gridTemplateColumns: "80px 1fr 50px",
        gridTemplateRows: "50% 50%"
      }}
    >
      <Avatar
        sx={{
          width: 45,
          height: 45,
          marginTop: "18px",
          gridRow: "span 2",
          justifySelf: "center"
        }}
        alt="#"
        src="#"
      />
      <Typography
        noWrap
        sx={{
          alignSelf: "end",
          fontWeight: "bold",
          fontSize: "1.2rem"
        }}
      >
        {friend.nickname}
      </Typography>
      <IconButton
        aria-label="open menu"
        // edge="end"
        size="large"
        sx={{ marginTop: "12px" }}
      >
        <MoreVertIcon fontSize="inherit" />
      </IconButton>
      <Typography
        sx={{
          maxHeight: "100%",
          paddingRight: "16px",
          overflow: "clip",
          fontSize: "0.9rem",
          fontStyle: "italic",
          alignSelf: "center",
          display: "-webkit-box",
          WebLineClamp: "2",
          WebkitBoxOrient: "vertical",
          gridColumn: "span 2"
        }}
      >
        {msgStr}
      </Typography>
    </Box>
  )
}
