import React from "react"
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  ListItemAvatar,
  Button,
  Avatar
} from "@mui/material"
import {
  Folder as FolderIcon,
  DoNotDisturbAltOutlined as NoIcon
} from "@mui/icons-material"

export default function UsersList({ users, handleSend }) {
  return (
    <List dense>
      {users.map((u) => (
        <ListItem
          key={`user-id-${u.id}`}
          secondaryAction={
            <>
              <Button
                edge="end"
                aria-label="accept"
                onClick={() => handleSend(u.id)}
              >
                Send friend request
              </Button>
              <IconButton
                edge="end"
                aria-label="reject"
              >
                <NoIcon />
              </IconButton>
            </>
          }
        >
          <ListItemAvatar>
            <Avatar>
              <FolderIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={u.nickname} />
        </ListItem>
      ))}
    </List>
  )
}
