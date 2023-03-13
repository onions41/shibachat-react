// MUI
import IconButton from "@mui/material/IconButton"
import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogTitle from "@mui/material/DialogTitle"
import DialogContent from "@mui/material/DialogContent"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import MoreVertIcon from "@mui/icons-material/MoreVert"

// Module imports
import { useState } from "react"

export default function MenuBtn({ friend, unfriend }) {
  // Menu open/close state
  const [anchorEl, setAnchorEl] = useState(null)
  const menuIsOpen = Boolean(anchorEl)

  // Unfriend confirmation dialog open/close state
  const [dialogIsOpen, setDialogIsOpen] = useState(false)

  // Event handlers
  const handleMenuBtnClk = (event) => {
    event && event.preventDefault() // to prevent bubbling
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = (event) => {
    event && event.preventDefault() // to prevent bubbling
    setAnchorEl(null)
  }

  const handleUnfriendBtnClk = (event) => {
    event && event.preventDefault() // to prevent bubbling
    handleMenuClose()
    setDialogIsOpen(true)
  }

  const handleUnfriendConfirmBtnClk = (event) => {
    event && event.preventDefault() // to prevent bubbling
    setDialogIsOpen(false)
    unfriend({
      variables: {
        friendId: friend.id
      }
    })
  }

  return (
    <>
      <IconButton
        onClick={handleMenuBtnClk}
        aria-controls={menuIsOpen ? "friend-menu-button" : undefined}
        aria-haspopup="true"
        aria-expanded={menuIsOpen ? "true" : undefined}
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
