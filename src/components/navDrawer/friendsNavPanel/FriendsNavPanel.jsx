// Modudule imports
import React, { useState } from "react"
import styled from "styled-components"

// External imports
import FRequestsModal from "./FRequestsModal"
import ReceivedFReqList from "./ReceivedFReqList"
import FriendsList from "./FriendsList"

const FriendsNavPanelWrapper = styled.div`
  width: 100%;
`

export default function FriendsNavPanel({ me, meQuery }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <FriendsNavPanelWrapper>
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
    </FriendsNavPanelWrapper>
  )
}
