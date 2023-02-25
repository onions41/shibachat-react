// MUI
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import styled from "@mui/material/styles/styled"

// Components
import TopBar from "components/contacts/TopBar"
import ContactCardsGrid from "components/contacts/ContactCardsGrid"

const FriendsRouteContainer = ({ children }) => (
  <Container
    maxWidth="lg"
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
        <ContactCardsGrid me={me} />
      </FriendCardsScrollBox>
    </FriendsRouteContainer>
  )
}
