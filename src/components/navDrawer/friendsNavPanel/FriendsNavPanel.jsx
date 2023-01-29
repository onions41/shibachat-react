// MUI
import Box from "@mui/material/Box"

// Module imports
import { useState } from "react"

// Internal imports
import FRequestsModal from "./FRequestsModal"
import ReceivedFReqList from "./ReceivedFReqList"
import FriendsList from "./FriendsList"

export default function FriendsNavPanel({ me, meQuery }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <Box width="100%">
      {/* Conditionally renders a list of friend requests I received */}
      {me.receivedFRequests.length ? (
        <ReceivedFReqList
          me={me}
          meQuery={meQuery}
        />
      ) : null}

      {/* Conditionally renders a list of my friends */}
      {me.friends.length ? (
        <FriendsList
          me={me}
          meQuery={meQuery}
          handleOpenModalBtnClk={() => setIsModalOpen(true)}
        />
      ) : null}

      {/* Modal for sending friend requests */}
      <FRequestsModal
        isOpen={isModalOpen}
        handleClose={() => setIsModalOpen(false)}
        me={me}
      />
    </Box>
  )
}
