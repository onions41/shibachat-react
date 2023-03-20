import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogTitle from "@mui/material/DialogTitle"
import DialogContent from "@mui/material/DialogContent"

import { useState } from "react"

export default function ReceivedFReqCard({
  fReq,
  acceptFRequest,
  blockFRequest
}) {
  // Block fRequest confirmation dialog open/close state
  const [blockFReqDialog, setBlockFReqDialog] = useState(false)
  return (
    <Box
      sx={{
        width: "135px",
        margin: "0 8px",
        backgroundColor: "background.white",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "border.gray",
        borderRadius: "32px"
      }}
    >
      <Avatar
        sx={{
          width: 37,
          height: 37,
          margin: "19px auto 12px",
          gridRow: "span 2",
          justifySelf: "center"
        }}
        alt="#"
        src="#"
      />
      <Typography
        sx={{ textAlign: "center", marginBottom: "12px", fontSize: "0.9rem" }}
      >
        {fReq.sender.nickname}
      </Typography>
      <Stack
        spacing={1}
        width={100}
        mx="auto"
        my={1.5}
      >
        {/* Accept Button */}
        <Button
          variant="outlined"
          color="secondary"
          onClick={() =>
            acceptFRequest({
              variables: {
                senderId: fReq.senderId
              }
            })
          }
          sx={{
            textTransform: "none",
            fontWeight: "bold",
            "&.MuiButtonBase-root": { borderRadius: "1000px", pt: "7px" },
            "&:hover": {
              color: "secondary.dark",
              backgroundColor: "secondary.light"
            }
          }}
          // disabled={cancelFReqLoading}
        >
          Accept
        </Button>

        {/* Do Not Want Button */}
        {/* Opens confirmation dialog when clicked */}
        <Button
          variant="outlined"
          size="small"
          onClick={() => setBlockFReqDialog(true)}
          sx={{
            fontSize: "13px",
            textTransform: "none",
            "&.MuiButtonBase-root": { borderRadius: "1000px", pt: "7px" },
            "&:hover": {
              color: "primary.dark",
              backgroundColor: "primary.light"
            }
          }}
          // disabled={cancelFReqLoading}
        >
          Do Not Want
        </Button>

        {/* Block Friend Request Confirm Dialog */}
        <Dialog
          open={blockFReqDialog}
          onClose={(event) => {
            event && event.preventDefault()
            setBlockFReqDialog(false)
          }}
        >
          <DialogTitle>Really block?</DialogTitle>
          <DialogContent>block this inu&apos;s friend request</DialogContent>
          <DialogActions>
            <Button
              autoFocus
              onClick={() => setBlockFReqDialog(false)}
            >
              Cancel
            </Button>
            {/* Executes BlockFRequest mutation */}
            <Button
              onClick={(event) => {
                event && event.preventDefault()
                blockFRequest({
                  variables: {
                    senderId: fReq.senderId
                  }
                })
              }}
            >
              Block
            </Button>
          </DialogActions>
        </Dialog>
      </Stack>
    </Box>
  )
}
