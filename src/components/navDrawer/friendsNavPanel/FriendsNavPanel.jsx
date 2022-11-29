// Modudule imports
import React, { useState } from "react"
import { Button } from "@mui/material"

// External imports
import FRequestsModal from "./FRequestsModal"

export default function FriendsNavPanel({ me }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div>
      <Button
        onClick={() => {
          setIsModalOpen(true)
        }}
      >
        Make new friends!
      </Button>
      <FRequestsModal
        isOpen={isModalOpen}
        handleClose={() => {
          setIsModalOpen(false)
        }}
        me={me}
      />
    </div>
  )
}
