import { useCallback } from "react"
import {
  ListItem,
  Button,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Typography
} from "@mui/material"
import { Folder as FolderIcon } from "@mui/icons-material"

export default function SentFReqCard({
  fRequest,
  cancelFRequest,
  cancelFReqLoading
}) {
  // Execute the CancelFRequest mutation when button clicked
  const handleCancelFReqBtnClick = useCallback(() => {
    cancelFRequest({
      variables: {
        receiverId: fRequest.receiverId
      }
    })
  }, [])

  return (
    <ListItem
      secondaryAction={
        <Button
          variant="outlined"
          onClick={handleCancelFReqBtnClick}
          disabled={cancelFReqLoading}
        >
          Cancel request
        </Button>
      }
    >
      {/* Avatar */}
      <ListItemAvatar>
        <Avatar>
          <FolderIcon />
        </Avatar>
      </ListItemAvatar>

      {/* Nickname */}
      <ListItemText
        primary={<Typography>{fRequest.receiver.nickname}</Typography>}
        secondary={"Plz respond lol"}
      />
    </ListItem>
  )
}
