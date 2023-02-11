/* eslint-disable indent */

// MUI
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import Typography from "@mui/material/Typography"
import ListItemAvatar from "@mui/material/ListItemAvatar"
import Avatar from "@mui/material/Avatar"
import find from "lodash/find"

// Internal imports
import millisecondsToTime from "utility/millisecondsToTime"

export default function MessageCard({ message, me }) {
  const { textContent, createdAt, senderId } = message

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
              {message.senderId === me.id
                ? "Me"
                // Find the friend object out of an array of friend objects and returns friend.nickname
                : find(me.friends, (o) => o.id === senderId).nickname}
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
