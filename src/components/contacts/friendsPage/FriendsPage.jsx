import Typography from "@mui/material/Typography"
import ContactCardsGrid from "components/contacts/ContactCardsGrid"
import ReceivedFReqCarousel from "components/contacts/receivedFReqCarousel/ReceivedFReqCarousel"

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
        <ContactCardsGrid me={me} />
      ) : (
        "You don't have any friends yet."
      )}
    </>
  )
}
