import React from 'react'
import styled from 'styled-components'

import NavDrawer from './navDrawer'

const RouteContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`

const RightContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`
const ChildrenContainer = styled.div`
  flex: 1;
  display: flex;
`

const InputBar = styled.div`
  height: 50px;
  width: 100%;
  background-color: orange;
`

export default function UserControls({ children }) {
  return (
    <RouteContainer>
      <NavDrawer />
      <RightContainer>
        <ChildrenContainer>{children}</ChildrenContainer>
        <InputBar />
      </RightContainer>
    </RouteContainer>
  )
}
