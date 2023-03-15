import Typography from "@mui/material/Typography"
import FriendCardsGrid from "components/contacts/friendsPage/friendCardsGrid/FriendCardsGrid"
import ReceivedFReqCarousel from "components/contacts/friendsPage/receivedFReqCarousel/ReceivedFReqCarousel"

export default function FriendsPage({ me }) {
  return (
    <>
      {me.receivedFRequests.length ? (
        <>
          <Typography
            color="text.secondary"
            variant="h3"
            mt={2}
          >
            Friend Requests
          </Typography>
          <ReceivedFReqCarousel me={me} />
        </>
      ) : null}
      <Typography
        color="text.secondary"
        variant="h3"
        mt={2}
      >
        Friends
      </Typography>
      {me.friends.length ? (
        <FriendCardsGrid me={me} />
      ) : (
        "You don't have any friends yet."
      )}
    </>
  )
}
