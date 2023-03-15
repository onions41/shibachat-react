import Box from "@mui/material/Box"
import FriendCard from "../friendCard/FriendCard"

import { useMutation } from "@apollo/client"
import UNFRIEND from "graphql/mutations/Unfriend"

export default function ContactCardsGrid({ me }) {
  // Unfriend mutation
  const [unfriend] = useMutation(UNFRIEND, {
    update(cache, { data }) {
      // Removes the unfriended user from MeQuery
      cache.modify({
        id: cache.identify(me),
        fields: {
          friends(existingFriendRefs = [], { readField }) {
            return existingFriendRefs.filter(
              (friendRef) => data.unfriend.id !== readField("id", friendRef)
            )
          }
        }
      })
    }
  })

  return (
    <Box
      sx={{
        display: "grid",
        columnGap: "16px",
        gridTemplateColumns: "repeat(3, 1fr)"
      }}
    >
      {me.friends.map((friend) => (
        <FriendCard
          friend={friend}
          unfriend={unfriend}
          key={`friend-${friend.id}`}
        />
      ))}
    </Box>
  )
}
