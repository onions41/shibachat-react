// Module imports
import { useState, useCallback, useEffect } from "react"
import {
  ListItem,
  IconButton,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Typography,
  Menu,
  MenuItem,
  Button,
  DialogActions,
  Dialog,
  DialogTitle,
  DialogContent,
  Alert,
  Snackbar
} from "@mui/material"
import { Folder as FolderIcon } from "@mui/icons-material"
import MoreVertIcon from "@mui/icons-material/MoreVert"

export default function FriendCard({
  friend, // is User type
  unfriend // executes mutation
  // sendFReqLoading
}) {
  return (
    <ListItem
      secondaryAction={
        <MenuBtn
          friend={friend}
          unfriend={unfriend}
        />
      }
    >
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

function MenuBtn({ friend, unfriend }) {
  // Menu open/close state
  const [anchorEl, setAnchorEl] = useState(null)
  const menuIsOpen = Boolean(anchorEl)

  // Unfriend confirmation dialog open/close state
  const [dialogIsOpen, setDialogIsOpen] = useState(false)

  // Unfriend success alert open/close state
  const [unfriendSuccessToastIsOpen, setUnfriendSuccessToastIsOpen] =
    useState(false)

  // Event handlers
  const handleMenuBtnClk = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const handleUnfriendBtnClk = () => {
    handleMenuClose()
    setDialogIsOpen(true)
  }

  const handleUnfriendConfirmBtnClk = () => {
    setDialogIsOpen(false)
    unfriend({
      variables: {
        friendId: friend.id
      }
    })
    setUnfriendSuccessToastIsOpen(true)
  }

  return (
    <>
      <IconButton
        variant="outlined"
        onClick={handleMenuBtnClk}
        disabled={false}
        aria-controls={menuIsOpen ? "friend-menu-button" : undefined}
        aria-haspopup="true"
        aria-expanded={menuIsOpen ? "true" : undefined}
      >
        <MoreVertIcon />
      </IconButton>

      {/* Menu that pops up when the IconButton above is clicked */}
      <Menu
        anchorEl={anchorEl}
        open={menuIsOpen}
        onClose={handleMenuClose}
        MenuListProps={{
          "aria-labelledby": "friend-button"
        }}
      >
        <MenuItem onClick={handleMenuClose}>View Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>Block</MenuItem>
        <MenuItem onClick={handleUnfriendBtnClk}>Unfriend</MenuItem>
      </Menu>

      <UnfriendConfirmDialog
        onClose={() => setDialogIsOpen(false)}
        open={dialogIsOpen}
        onConfirmClick={handleUnfriendConfirmBtnClk}
      />

      {/* Unfriend success Toast */}
      {/* <Snackbar
        open={true}
        autoHideDuration={6000}
        onClose={() => setUnfriendSuccessToastIsOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        sx={{
          position: "fixed",
          transform: "translate(-50%, -50%)"
        }}
      >
        <Alert
          severity="success"
          onClose={() => setUnfriendSuccessToastIsOpen(false)}
        >
          Unfriended {friend.nickname}
        </Alert>
      </Snackbar> */}
    </>
  )
}

function UnfriendConfirmDialog({ onClose, open, onConfirmClick }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
    >
      <DialogTitle>Really unfriend?</DialogTitle>
      <DialogContent>You might make this inu sad tho</DialogContent>
      <DialogActions>
        <Button
          autoFocus
          onClick={onClose}
        >
          Cancel
        </Button>
        <Button onClick={onConfirmClick}>Unfriend</Button>
      </DialogActions>
    </Dialog>
  )
}
