// Module imports
import React, { useState } from "react"
import {
  ListItem,
  IconButton,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Typography,
  Menu,
  MenuItem
} from "@mui/material"
import { Folder as FolderIcon } from "@mui/icons-material"
import MoreVertIcon from "@mui/icons-material/MoreVert"

export default function FriendCard({
  friend
  // sendFRequest,
  // sendFReqLoading
}) {
  // const handleSendFReqBtnClick = useCallback(() => {
  //   sendFRequest({
  //     variables: {
  //       receiverId: user.id
  //     }
  //   })
  // }, [])

  return (
    <ListItem secondaryAction={<MenuBtn />}>
      {/* Avatar */}
      <ListItemAvatar>
        <Avatar>
          <FolderIcon />
        </Avatar>
      </ListItemAvatar>
      {/* Nickname and status text */}
      <ListItemText
        primary={<Typography>{friend.nickname}</Typography>}
        secondary={"Last chat 2022-12-01"}
      />
    </ListItem>
  )
}

function MenuBtn() {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <IconButton
        variant="outlined"
        onClick={handleClick}
        disabled={false}
        aria-controls={open ? "friend-menu-button" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "friend-button"
        }}
      >
        <MenuItem onClick={handleClose}>View Profile</MenuItem>
        <MenuItem onClick={handleClose}>Block</MenuItem>
        <MenuItem onClick={handleClose}>Unfriend</MenuItem>
      </Menu>
    </>
  )
}
