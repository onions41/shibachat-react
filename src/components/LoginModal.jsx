// Module imports
import React from 'react'
import { Modal } from '@mui/material'
import styled from 'styled-components'

// Internal imports
import LoginForm from './LoginForm'

// Defines the size and position of its parent Modal
// Wraps the children of the model
const ModalDiv = styled.div`
  width: min(530px, 100vw);
  margin: auto;
  margin-top: 40px;
  padding: 15px 0 15px; 
`

export default function LoginModal({ isOpen, handleLogin }) {
  return (
    <Modal open={isOpen} >
      <ModalDiv>
        <LoginForm handleLogin={handleLogin} />
      </ModalDiv>
    </Modal>
  )
}
