// MUI
import List from "@mui/material/List"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

// Internal imports
import SubjectCard from "./SubjectCard"

export default function SubjectsList({ me }) {
  // Filter me.friends, which is an array, by latestMessageWithMe me being null or not
  const messagedFriends = me.friends.filter((friend) => friend.latestMessageWithMe)
  // Sort the resulting array by friend.latestMessageWithMe
  const messageFriendsDesc = messagedFriends.sort((later, earlier) => parseInt(later, 10) - parseInt(earlier, 10))

  return (
    <List dense={false}>
      {/* List header */}
      <ListHeader />
      {/* List items */}
      {messageFriendsDesc.map((friend) => (
        <SubjectCard
          subject={friend}
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
      <Typography sx={{ pl: 1.4, pt: 0.6 }} component="h1">Messages</Typography>
    </Stack>
  )
}
