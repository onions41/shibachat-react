import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Avatar from "@mui/material/Avatar"
import Typography from "@mui/material/Typography"
import useTheme from "@mui/material/styles/useTheme"
import ChatBubbleIcon from "@mui/icons-material/ChatBubble"
import PersonIcon from "@mui/icons-material/Person"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"
import { useRef, useCallback } from "react"

function IconLinkBox({ children }) {
  const { palette } = useTheme()

  return (
    <Box
      sx={{
        color: "text.tertiary",
        fontSize: "1.7rem",
        width: "52px",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "&:hover": {
          color: "primary.main",
          boxShadow: `${palette.primary.main} 0px -3px 0px inset`
        }
      }}
    >
      {children}
    </Box>
  )
}

export default function Links() {
  const { palette } = useTheme()

  // For underlining card text on mouse hover
  const downArrowRef = useRef(null)
  const handleMouseEnter = useCallback(() => {
    downArrowRef.current.setAttribute(
      "style",
      `color: ${palette.primary.main};`
    )
  }, [])
  const handleMouseLeave = useCallback(() => {
    downArrowRef.current.setAttribute("style", "color: auto;")
  }, [])

  return (
    <Stack
      direction="row"
      alignItems="center"
      height="100%"
    >
      <IconLinkBox>
        <ChatBubbleIcon fontSize="inherit" />
      </IconLinkBox>
      <IconLinkBox>
        <PersonIcon fontSize="large" />
      </IconLinkBox>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          ml: 3
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Avatar>
          <Typography
            sx={{ fontSize: "1.4rem", position: "relative", top: "3px" }}
          >
            H
          </Typography>
        </Avatar>
        <ArrowDropDownIcon
          ref={downArrowRef}
          sx={{ position: "relative", top: "1px", fontSize: "1.8rem" }}
        />
      </Box>
    </Stack>
  )
}
