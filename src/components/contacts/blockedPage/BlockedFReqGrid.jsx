import Box from "@mui/material/Box"
// import FriendCard from "./friendCard/FriendCard"

// import { useMutation } from "@apollo/client"
// import UNFRIEND from "graphql/mutations/Unfriend"
import BlockedFReqCard from "./BlockedFReqCard"

export default function BlockedFReqGrid({ me }) {
  // // Unfriend mutation
  // const [unfriend] = useMutation(UNFRIEND, {
  //   update(cache, { data }) {
  //     // Removes the unfriended user from MeQuery
  //     cache.modify({
  //       id: cache.identify(me),
  //       fields: {
  //         friends(existingFriendRefs = [], { readField }) {
  //           return existingFriendRefs.filter(
  //             (friendRef) => data.unfriend.id !== readField("id", friendRef)
  //           )
  //         }
  //       }
  //     })
  //   }
  // })

  const blockedFReqs = [...Array(30)].map((_e, i) => {
    return { senderId: i }
  })

  return (
    <Box
      sx={{
        width: "98%",
        display: "grid",
        columnGap: "10px",
        gridTemplateColumns: "repeat(7, 1fr)"
      }}
    >
      {/* me.receivedFRequests.filter((fReq) => fReq.status === "BLOCKED").map */}
      {blockedFReqs.map((fReq) => (
        <BlockedFReqCard
          fReq={fReq}
          // TODO: unblock={unblock}
          key={`sender-${fReq.senderId}`}
        />
      ))}
    </Box>
  )
}
