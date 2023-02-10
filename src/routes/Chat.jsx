// MUI
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"

// Components
import Sidebar from "components/chat/sidebar/Sidebar"

const ChatRouteContainer = ({ children }) => (
  <Container
    maxWidth="xl"
    disableGutters={true}
    sx={{ height: "100%", pt: 2, backgroundColor: "aquamarine" }}
  >
    <Stack
      direction="row"
      spacing={2}
      px={2}
      sx={{ height: "100%" }}
    >
      {children}
    </Stack>
  </Container>
)

const SidebarContainer = ({ children }) => (
  <Stack
    sx={{
      width: "27%",
      height: "100%",
      backgroundColor: "plum"
    }}
  >
    {children}
  </Stack>
)

const ContentContainer = ({ children }) => (
  <Box
    sx={{
      width: "73%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      backgroundColor: "rebeccapurple"
    }}
  >
    {children}
  </Box>
)

export default function Test({ meCalled, meLoading, meError, me }) {
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
    <ChatRouteContainer>
      <SidebarContainer>
        <Sidebar me={me} />
      </SidebarContainer>
      <ContentContainer>
        <div>
          This is the content container where I will put the messages list, the
          input box...
        </div>
      </ContentContainer>
    </ChatRouteContainer>
  )
}
