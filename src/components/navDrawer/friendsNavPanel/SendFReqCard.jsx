// Module imports
import React, { useCallback } from "react"
import {
  ListItem,
  Button,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Typography
} from "@mui/material"
import { Folder as FolderIcon } from "@mui/icons-material"

export default function SendFReqCard({
  user,
  sendFRequest,
  sendFReqLoading
}) {
  const handleSendFReqBtnClick = useCallback(() => {
    sendFRequest({
      variables: {
        receiverId: user.id
      }
    })
  }, [])

  return (
    <ListItem
      secondaryAction={user.receivedFReqFromMe
        ? ( // Send friend request button
            <Typography>Already sent</Typography>
          )
        : (
            <Button
            variant="outlined"
            onClick={handleSendFReqBtnClick}
            disabled={sendFReqLoading}
            >
              Send request!
            </Button>
          )
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
        primary={<Typography>{user.nickname}</Typography>}
        secondary={"some text goes here maybe"}
      />
    </ListItem>
  )
}
