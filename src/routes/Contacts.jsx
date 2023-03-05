// MUI
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import styled from "@mui/material/styles/styled"

// Components
import TopBar from "components/contacts/TopBar"
import ContactCardsGrid from "components/contacts/ContactCardsGrid"
import ReceivedFReqCarousel from "components/contacts/ReceivedFReqCarousel"

const FriendsRouteContainer = ({ children }) => (
  <Container
    maxWidth="md"
    disableGutters={true}
    sx={{ height: "100%", pt: 2 }}
  >
    {children}
  </Container>
)

const TopBarContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "55px",
  borderWidth: "0 0 1px",
  borderStyle: "solid",
  borderColor: theme.palette.border.gray
}))

const FriendCardsScrollBox = styled(Box)(() => ({
  width: "98%",
  height: "calc(100% - 65px)",
  margin: "0 auto",
  overflow: "scroll"
}))

export default function Contacts({ meCalled, meLoading, meError, me }) {
  if (!meCalled) {
    return null
  }

  if (meLoading) {
    return <div style={{ width: "100%" }}>Loading the Me query</div>
  }

  if (meError) {
    console.log("***Me query error: ", meError)
    return (
      <div style={{ width: "100%" }}>
        Me query threw an error. Logged to console.
      </div>
    )
  }

  // data was fetched successfully

  return (
    <FriendsRouteContainer>
      <TopBarContainer>
        <TopBar />
      </TopBarContainer>
      <FriendCardsScrollBox>
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
        {me.friends.length ? <ContactCardsGrid me={me} /> : "You don't have any friends yet."}
      </FriendCardsScrollBox>
    </FriendsRouteContainer>
  )
}
