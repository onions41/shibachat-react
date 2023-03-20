// External imports
import { useState, useRef, useCallback } from "react"
import { useDispatch } from "react-redux"
import { useMutation } from "@apollo/client"

// Material UI imports
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Avatar from "@mui/material/Avatar"
import Typography from "@mui/material/Typography"
import useTheme from "@mui/material/styles/useTheme"
import ChatBubbleIcon from "@mui/icons-material/ChatBubble"
import PersonIcon from "@mui/icons-material/Person"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"

// Internal imports
import IconLinkBox from "./IconLinkBox"
import { logoutAction } from "store/authSlice"
import LOGOUT from "graphql/mutations/Logout"

// The icon links and avatar menu on the right side of the menu
export default function Links() {
  // Redux
  const dispatch = useDispatch()

  // Logout mutation
  const [logout] = useMutation(LOGOUT, { fetchPolicy: "network-only" })

  const { palette } = useTheme()
  // To open and close avatar menu
  const [anchorEl, setAnchorEl] = useState(null)
  const menuIsOpen = Boolean(anchorEl)

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

      {/* Avatar button */}
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
        onClick={(event) => {
          event && event.preventDefault() // to prevent bubbling
          setAnchorEl(event.currentTarget)
        }}
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

      {/* Menu that pops up when the Avatar button above is clicked */}
      <Menu
        anchorEl={anchorEl}
        open={menuIsOpen}
        onClose={() => setAnchorEl(null)}
        MenuListProps={{
          "aria-labelledby": "friend-button"
        }}
      >
        <MenuItem onClick={() => setAnchorEl(null)}>My Profile</MenuItem>
        <MenuItem
          onClick={(event) => {
            event && event.preventDefault() // to prevent bubbling
            logout().then(() => dispatch(logoutAction()))
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </Stack>
  )
}
