// Module imports
import { Modal, Typography, useTheme } from "@mui/material"
import styled from "styled-components"

// Internal imports
import SentFReqList from "./SentFReqList"
import SendFReqList from "./SendFReqList"

// https://styled-components.com/docs/advanced#theming
const ModalContainer = styled.div`
  background-color: ${(props) => props.theme.palette.background.default};
  border: 4px ${(props) => props.theme.palette.primary.main} solid;
  border-radius: 10px;
  width: 500px;
  height: 80%;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 16px;
  overflow: scroll;
`

export default function FRequestsModal({ isOpen, handleClose, me }) {
  const theme = useTheme()

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ModalContainer theme={theme}>
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
