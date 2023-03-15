// MUI
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"

import { useState } from "react"

// Components
import TopBar from "components/contacts/topBar/TopBar"
import FriendsPage from "components/contacts/friendsPage/FriendsPage"

export default function Contacts({ meCalled, meLoading, meError, me }) {
  // Hooks
  const [page, setPage] = useState("friends")

  // End of Hooks

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
    <Container
      maxWidth="md"
      disableGutters={true}
      sx={{ height: "100%", pt: 2 }}
    >
      <Box
        sx={{
          width: "100%",
          height: "55px",
          borderWidth: "0 0 1px",
          borderStyle: "solid",
          borderColor: "border.gray"
        }}
      >
        {/* The sub-menu bar of the contacts route */}
        <TopBar
          me={me}
          page={page}
          setPage={setPage}
        />
      </Box>
      <Box
        sx={{
          width: "98%",
          height: "calc(100% - 65px)",
          margin: "0 auto",
          overflow: "scroll"
        }}
      >
        {/* The content shown depending what page is selected in the sub-menu */}
        <FriendsPage me={me} />
      </Box>
    </Container>
  )
}
