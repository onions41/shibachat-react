// Modudule imports
import React, { useState } from "react"
import { Button, Typography, IconButton, Stack } from "@mui/material"
import styled from "styled-components"
import RefreshIcon from "@mui/icons-material/Refresh"

// External imports
import FRequestsModal from "./FRequestsModal"
import ReceivedFReqList from "./ReceivedFReqList"

const FriendsNavPanelWrapper = styled.div`
  width: 100%;
`

export default function FriendsNavPanel({ me, meQuery }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <FriendsNavPanelWrapper>
      <Button
        onClick={() => {
          setIsModalOpen(true)
        }}
      >
        Make new friends!
      </Button>

      <RefreshHeaderWithBtn meQuery={meQuery} />

      <ReceivedFReqList me={me} />
      <FRequestsModal
        isOpen={isModalOpen}
        handleClose={() => {
          setIsModalOpen(false)
        }}
        me={me}
      />
    </FriendsNavPanelWrapper>
  )
}

function RefreshHeaderWithBtn({ meQuery }) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      spacing={1}
      sx={{ bgcolor: "primary.dark", px: 0.5 }}
    >
      <Typography sx={{ pl: 1.4, pt: 0.6 }}>Friends</Typography>
      <IconButton onClick={meQuery}>
        <RefreshIcon />
      </IconButton>
    </Stack>
  )
}
