// Modudule imports
import React, { useState } from "react"
import { Button } from "@mui/material"
import styled from "styled-components"

// External imports
import FRequestsModal from "./FRequestsModal"
import ReceivedFReqList from "./ReceivedFReqList"

const FriendsNavPanelWrapper = styled.div`
  width: 100%
`

export default function FriendsNavPanel({ me }) {
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
