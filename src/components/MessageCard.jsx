// MUI
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import Typography from "@mui/material/Typography"
import ListItemAvatar from "@mui/material/ListItemAvatar"
import Avatar from "@mui/material/Avatar"

// Internal imports
import millisecondsToTime from "utility/millisecondsToTime"

export default function MessageCard({ message }) {
  const { textContent, createdAt } = message

  return (
    <ListItem alignItems="flex-start">
      {/* TODO. Avatar */}
      <ListItemAvatar>
        <Avatar
          alt="#"
          src="#"
        />
      </ListItemAvatar>
      <ListItemText
        // Top line of message. Shows sender and createdAt time
        // TODO. Get the sender's name out of the meQuery cache. Put the query in Chat.jsx
        primary={
          <>
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              Homer Simpsones
            </Typography>
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {` - ${millisecondsToTime(createdAt)}`}
            </Typography>
          </>
        }
        // Message text
        secondary={
          <Typography
            sx={{ display: "inline" }}
            component="span"
            variant="body2"
            color="text.primary"
          >
            {textContent}
          </Typography>
        }
      />
    </ListItem>
  )
}
