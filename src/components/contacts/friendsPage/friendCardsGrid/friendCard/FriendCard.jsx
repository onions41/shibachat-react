// MUI
import Box from "@mui/material/Box"
import Avatar from "@mui/material/Avatar"
import Typography from "@mui/material/Typography"

// Module
import { useRef, useCallback } from "react"
import { Link as RouterLink } from "react-router-dom"

// Utilities
import formatDateShort from "utility/formatDateShort"
import MenuBtn from "./MenuBtn"

export default function FriendCard({ friend, unfriend }) {
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
      <MenuBtn
        friend={friend}
        unfriend={unfriend}
      />
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
