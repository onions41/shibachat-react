// MUI
import ListItem from "@mui/material/ListItem"
import ListItemAvatar from "@mui/material/ListItemAvatar"
import ListItemText from "@mui/material/ListItemText"
import Avatar from "@mui/material/Avatar"
import Typography from "@mui/material/Typography"
import FolderIcon from "@mui/icons-material/Folder"

// Module imports

export default function FriendCard({ friend /* User type */ }) {
  return (
    <ListItem>
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
