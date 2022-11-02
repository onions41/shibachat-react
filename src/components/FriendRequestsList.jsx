import React from 'react'
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  ListItemAvatar,
  Avatar
} from '@mui/material'
import {
  Folder as FolderIcon,
  CheckCircleOutlineOutlined as CheckCircleIcon,
  DoNotDisturbAltOutlined as NoIcon
} from '@mui/icons-material'

export default function FriendRequestsList({ requests }) {
  return (
    <List dense>
      {
        requests.map((fr) => (
          <ListItem
            key={`friend-request-id-${fr.id}`}
            secondaryAction={<>
              <IconButton edge="end" aria-label="accept">
                <CheckCircleIcon />
              </IconButton>
              <IconButton edge="end" aria-label="reject">
                <NoIcon />
              </IconButton>
            </>}
          >
            <ListItemAvatar>
              <Avatar>
                <FolderIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={fr.nickname}
              secondary="Wanna friends!"
            />
          </ListItem>
        ))
      }
    </List>
  )
}
