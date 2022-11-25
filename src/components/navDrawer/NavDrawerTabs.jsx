// Module imports
import React from 'react'
import { Tabs, Tab } from '@mui/material'
import {
  ChatBubbleOutlineOutlined,
  GroupsOutlined
} from '@mui/icons-material'

export default function NavDrawerTabs({ tabIndex, onTabChange }) {
  return (
    <Tabs variant="fullWidth" value={tabIndex} onChange={onTabChange} aria-label="icon tabs example">
      <Tab icon={<ChatBubbleOutlineOutlined />} aria-label="phone" />
      <Tab icon={<GroupsOutlined />} aria-label="favorite" />
      <Tab label="bark" aria-label="person" />
    </Tabs>
  )
}
