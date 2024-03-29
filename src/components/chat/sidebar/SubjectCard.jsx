/* eslint-disable indent */

// MUI
import Box from "@mui/material/Box"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import Typography from "@mui/material/Typography"
import ListItemAvatar from "@mui/material/ListItemAvatar"
import Avatar from "@mui/material/Avatar"
import useTheme from "@mui/material/styles/useTheme"

// Module imports
import { useRef, useCallback } from "react"
import { Link as RouterLink, useParams } from "react-router-dom"

// Internal imports
import formatDateShort from "utility/formatDateShort"

export default function SubjectCard({ subject }) {
  // Hooks
  const { id: subjectId, nickname: subjectName, latestMessageWithMe } = subject
  const { textContent, createdAt } = latestMessageWithMe
  const createdAtDateObj = new Date(parseInt(createdAt, 10))

  const isSelected = subjectId === parseInt(useParams().subjectId, 10)
  const { palette } = useTheme()

  // For underlining card text on mouse hover
  const nameTextRef = useRef(null)
  const dateTextRef = useRef(null)
  const handleMouseEnter = useCallback(() => {
    nameTextRef.current.setAttribute("style", "text-decoration: underline;")
    dateTextRef.current.setAttribute(
      "style",
      "text-decoration: underline; color: rgb(45, 45, 45)"
    )
  }, [])
  const handleMouseLeave = useCallback(() => {
    nameTextRef.current.removeAttribute("style")
    dateTextRef.current.removeAttribute("style")
  }, [])

  // End of Hooks

  return (
    <ListItem
      component={RouterLink}
      relative="path"
      to={`/chat/${subjectId}`}
      alignItems="flex-start"
      disableGutters={false}
      divider={true}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={isSelected ? {
        backgroundColor: "secondary.mainOl",
        boxShadow: `${palette.secondary.main} 2px 0px 0px inset`
      } : {}}
    >
      {/* TODO. Avatar */}
      <ListItemAvatar sx={{ "&.MuiListItemAvatar-root": { minWidth: 43 } }}>
        <Avatar
          sx={{ width: 30, height: 30 }}
          alt="#"
          src="#"
        />
      </ListItemAvatar>
      <ListItemText
        primary={
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            {/* Subject name */}
            <Typography
              ref={nameTextRef}
              sx={{ display: "inline" }}
              component="span"
              variant="body1"
              color="text.secondary"
              noWrap
            >
              {subjectName}
            </Typography>
            {/* Date of latest message */}
            <Typography
              ref={dateTextRef}
              sx={{ display: "inline" }}
              component="span"
              variant="body2"
              color="text.tertiary"
            >
              {formatDateShort(createdAtDateObj)}
            </Typography>
          </Box>
        }
        secondary={
          // Message text, clipped
          <Typography
            variant="body1"
            color="text.secondary"
            noWrap
          >
            {textContent}
          </Typography>
        }
      />
    </ListItem>
  )
}
