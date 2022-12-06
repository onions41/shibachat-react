// Module imports
import React from "react"
import { List, Stack, Typography, IconButton } from "@mui/material"
import RefreshIcon from "@mui/icons-material/Refresh"
import AddIcon from "@mui/icons-material/Add"

// Internal imports
import FriendCard from "./FriendCard"

export default function FriendsList({ me, meQuery, handleOpenModalBtnClk }) {
  return (
    <List dense={false}>
      <ListHeader
        meQuery={meQuery}
        handleOpenModalBtnClk={handleOpenModalBtnClk}
      />
      {me.friends.map((friend) => (
        <FriendCard
          friend={friend}
          // acceptFRequest={acceptFRequest}
          // cancelFReqLoading={cancelFReqLoading}add
          key={`friend-${friend.id}`}
        />
      ))}
    </List>
  )
}

function ListHeader({ meQuery, handleOpenModalBtnClk }) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      spacing={1}
      sx={{ bgcolor: "primary.dark", px: 0.5, mb: 1 }}
    >
      <Typography sx={{ pl: 1.4, pt: 0.6 }}>Friend inus!</Typography>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="end"
      >
        <IconButton onClick={meQuery}>
          <RefreshIcon />
        </IconButton>
        <IconButton onClick={handleOpenModalBtnClk}>
          <AddIcon />
        </IconButton>
      </Stack>
    </Stack>
  )
}
