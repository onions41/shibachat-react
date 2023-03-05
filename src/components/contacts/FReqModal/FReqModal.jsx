// MUI
import styled from "@mui/material/styles/styled"
import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal"
import Typography from "@mui/material/Typography"

// Internal imports
import SentFReqList from "./SentFReqList"
import SendFReqList from "./SendFReqList"

const ModalContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  border: `4px ${theme.palette.primary.main} solid`,
  borderRadius: 10,
  width: 500,
  height: "80%",
  position: "fixed",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  padding: 16,
  overflow: "scroll"
}))

export default function FReqModal({ isOpen, handleClose, me }) {
  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ModalContainer>
        {/* List of friend requests already sent */}
        <Typography align="center">Waiting to hear back</Typography>
        <SentFReqList me={me} />

        {/* List of users to whom you can send a friend request */}
        <Typography align="center">Ask an inu to be your friend</Typography>
        <SendFReqList me={me} />
      </ModalContainer>
    </Modal>
  )
}
