// MUI
import Box from "@mui/material/Box"
import Avatar from "@mui/material/Avatar"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import MoreVertIcon from "@mui/icons-material/MoreVert"

// Module
import { useRef, useCallback } from "react"
import { Link as RouterLink } from "react-router-dom"

// Utilities
import formatDateShort from "utility/formatDateShort"

export default function FriendCard({ friend }) {
  // Grabs the lastest message between me and friend
  // If there was no message yet, the default string in the line below
  let msgStr = "Send this inu a message"
  if (friend.latestMessageWithMe) {
    const createdAtDateObj = new Date(
      parseInt(friend.latestMessageWithMe.createdAt, 10)
    )
    msgStr = `${formatDateShort(createdAtDateObj)}: ${
      friend.latestMessageWithMe.textContent
    }`
  }

  // For underlining card text on mouse hover
  const nameTextRef = useRef(null)
  const handleMouseEnter = useCallback(() => {
    nameTextRef.current.setAttribute("style", "text-decoration: underline;")
  }, [])
  const handleMouseLeave = useCallback(() => {
    nameTextRef.current.removeAttribute("style")
  }, [])

  return (
    // Outer white box with rounded gray borders
    <Box
      component={RouterLink}
      to={`/chat/${friend.id}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{
        color: "text.primary", // Gets rid of <a> decorations
        textDecoration: "none", // Gets rid of <a> decorations
        height: "86px",
        margin: "8px 0",
        backgroundColor: "background.white",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "border.gray",
        borderRadius: "8px",
        display: "grid",
        gridTemplateColumns: "66px 1fr 50px",
        gridTemplateRows: "45% 55%",
        "&:hover": {
          borderColor: "border.black"
        }
      }}
    >
      {/* Avatar */}
      <Avatar
        sx={{
          width: 36,
          height: 36,
          marginTop: "18px",
          gridRow: "span 2",
          justifySelf: "center"
        }}
        alt="#"
        src="#"
      />
      {/* Nickname of the friend */}
      <Typography
        noWrap
        ref={nameTextRef}
        sx={{
          color: "text.secondary",
          lineHeight: 1.2,
          alignSelf: "end",
          fontWeight: "bold"
        }}
      >
        {friend.nickname}
      </Typography>
      {/* More button */}
      <IconButton
        aria-label="open menu"
        sx={{
          width: "37.8px",
          height: "37.8px",
          justifySelf: "center",
          position: "relative",
          top: "4px",
          left: "2px"
        }}
      >
        <MoreVertIcon />
      </IconButton>
      {/* Truncated last message */}
      <Typography
        sx={{
          maxHeight: "100%",
          paddingRight: "26px",
          color: "text.secondary",
          fontSize: "0.85rem",
          fontStyle: "italic",
          alignSelf: "center",
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: "2",
          overflow: "clip",
          gridColumn: "span 2"
        }}
      >
        {msgStr}
      </Typography>
    </Box>
  )
}
