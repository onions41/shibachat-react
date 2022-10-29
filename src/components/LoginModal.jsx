// Module imports
import React from 'react'
import { Modal } from '@mui/material'
import styled from 'styled-components'

// Internal imports
import LoginForm from './LoginForm'
import DevBar from './DevBar'

// Defines the size and position of its parent Modal
// Wraps the children of the model
const ModalDiv = styled.div`
  width: min(500px, 100%);
  margin: auto;
  margin-top: 40px;
  background-color: #9ec2cd;
  border: 2px solid #367b90;
  position: relative;
`

export default function LoginModal({ isOpen, handleLogin }) {
  return (
    <Modal open={isOpen}>
      <ModalDiv>
        <LoginForm handleLogin={handleLogin} />
        <DevBar />
      </ModalDiv>
    </Modal>
  )
}
