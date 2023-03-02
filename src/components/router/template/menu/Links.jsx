import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Avatar from "@mui/material/Avatar"
import Typography from "@mui/material/Typography"
import useTheme from "@mui/material/styles/useTheme"
import ChatBubbleIcon from "@mui/icons-material/ChatBubble"
import PersonIcon from "@mui/icons-material/Person"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"
import { useRef, useCallback } from "react"
import { Link as RouterLink, useLocation } from "react-router-dom"

// Put the icons in this box to highlight the icons
// and bottom border on mouse hover
function IconLinkBox({ path, children }) {
  const { palette } = useTheme()
  const { pathname } = useLocation() // e.g. /chat/whatever

  const Cp = () => (
    <Box
      sx={{
        color: "text.tertiary",
        fontSize: "1.7rem",
        width: "52px",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // because this is the currently selected path
        boxShadow: `${palette.primary.main} 0px -2px 0px inset`
      }}
    >
      {children}
    </Box>
  )

  const Np = () => (
    <Box
      component={RouterLink}
      to={path}
      sx={{
        color: "text.tertiary",
        fontSize: "1.7rem",
        width: "52px",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // the rest of the paths
        "&:hover": {
          color: "primary.main",
          boxShadow: `${palette.primary.main} 0px -2px 0px inset`
        }
      }}
    >
      {children}
    </Box>
  )

  if (pathname === "/") {
    if (path === "/chat") {
      return <Cp />
    } else {
      return <Np />
    }
  } else {
    if (RegExp(`^${path}`).test(pathname)) {
      return <Cp />
    } else {
      return <Np />
    }
  }
}

// The icon links and avatar menu on the right side of the menu
export default function Links() {
  const { palette } = useTheme()

  // For highlighting the avatar menu down arrow on mouse hover
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
      spacing={1}
    >
      {/* Chat and Contacts links */}
      <IconLinkBox path="/chat">
        <ChatBubbleIcon fontSize="inherit" />
      </IconLinkBox>
      <IconLinkBox path="/contacts">
        <PersonIcon fontSize="large" />
      </IconLinkBox>

      {/* Avatar menu */}
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          pl: 3
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
          sx={{
            color: "text.tertiary",
            position: "relative",
            top: "1px",
            fontSize: "1.8rem"
          }}
        />
      </Box>
    </Stack>
  )
}
