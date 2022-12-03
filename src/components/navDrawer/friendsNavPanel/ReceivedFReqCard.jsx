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

export default function ReceivedFReqCard({
  fRequest,
  acceptFRequest
  // cancelFReqLoading
}) {
  const handleAcceptFReqBtnClick = useCallback(() => {
    console.log("***fRequest.senderId: ", fRequest.senderId)
    acceptFRequest({
      variables: {
        senderId: fRequest.senderId
      }
    })
  }, [])

  return (
    <ListItem
      secondaryAction={
        <Button
          variant="outlined"
          onClick={handleAcceptFReqBtnClick}
          // disabled={cancelFReqLoading}
        >
          Accept
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
        primary={<Typography>{fRequest.sender.nickname}</Typography>}
      />
    </ListItem>
  )
}
