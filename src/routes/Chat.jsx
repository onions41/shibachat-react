// MUI
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import styled from "@mui/material/styles/styled"

// Components
import Sidebar from "components/chat/sidebar/Sidebar"
import Content from "components/chat/content/Content"

const ChatRouteContainer = ({ children }) => (
  <Container
    maxWidth="xl"
    disableGutters={true}
    sx={{ height: "100%", pt: 2 }}
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

const SidebarContainer = styled(Stack)(({ theme }) => ({
  width: "25%",
  height: "100%",
  backgroundColor: theme.palette.background.white,
  borderWidth: "1px 1px 0",
  borderStyle: "solid",
  borderColor: theme.palette.border.gray,
  borderTopRightRadius: 8,
  borderTopLeftRadius: 8
}))

const ContentContainer = styled(Box)(({ theme }) => ({
  width: "75%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  backgroundColor: theme.palette.background.white,
  borderWidth: "1px 1px 0",
  borderStyle: "solid",
  borderColor: theme.palette.border.gray,
  borderTopRightRadius: 8,
  borderTopLeftRadius: 8
}))

export default function Chat({ meCalled, meLoading, meError, me }) {
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
        <Content me={me} />
      </ContentContainer>
    </ChatRouteContainer>
  )
}
