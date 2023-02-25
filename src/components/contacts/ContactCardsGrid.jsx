import Box from "@mui/material/Box"
import FriendCard from "./FriendCard"

export default function ContactCardsGrid({ me }) {
  return (
    <Box
      sx={{
        display: "grid",
        columnGap: "16px",
        gridTemplateColumns: "repeat(3, 1fr)"
      }}
    >
      {me.friends.map((friend) => (
        <FriendCard friend={friend} key={`friend-${friend.id}`}/>
      ))}
    </Box>
  )
}
