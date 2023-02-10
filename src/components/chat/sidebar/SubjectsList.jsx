// MUI
import List from "@mui/material/List"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

// Internal imports
import FriendCard from "./FriendCard"

export default function FriendsList({ me }) {
  return (
    <List dense={false}>
      {/* List header */}
      <ListHeader />
      {/* List items */}
      {me.friends.map((friend) => (
        <FriendCard
          friend={friend}
          // cancelFReqLoading={cancelFReqLoading}add
          key={`friend-${friend.id}`}
        />
      ))}
    </List>
  )
}

function ListHeader() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      spacing={1}
      sx={{ bgcolor: "primary.dark", px: 0.5, mb: 1 }}
    >
      <Typography sx={{ pl: 1.4, pt: 0.6 }}>Friend inus!</Typography>
    </Stack>
  )
}
