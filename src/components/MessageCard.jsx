// MUI
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"

export default function MessageCard({ message }) {
  const { textContent, createdAt } = message

  return (
    <ListItem>
      <ListItemText
        primary={textContent}
        secondary={createdAt}
      />
    </ListItem>
  )
}
