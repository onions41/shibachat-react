import React, {
  useState,
  useCallback
} from 'react'
import { useQuery } from '@apollo/client'
import {
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemText,
  IconButton,
  ListItemAvatar,
  Avatar
} from '@mui/material'
import {
  Folder as FolderIcon,
  CheckCircleOutlineOutlined as CheckCircleIcon,
  DoNotDisturbAltOutlined as NoIcon
} from '@mui/icons-material'

import ME from '../graphql/queries/Me'
import NavDrawerTabs from './NavDrawerTabs'
import FriendRequestsList from './FriendRequestsList'

export default function NavDrawer() {
  /**
   * tabIndex is used to conditionally render different drawer content.
   * 0 for first tab, 1 for second tab...
   */
  const [tabIndex, setTabIndex] = useState(0)
  const handleTabChange = useCallback((_event, newValue) => {
    setTabIndex(newValue)
  })

  /**
   * GQL Hooks
   */
  const { data: meData, error: meError, loading: meLoading } = useQuery(ME)

  const drawerWidth = 280

  if (meLoading) {
    return <div style={{ width: drawerWidth }}>Loading the Me query</div>
  }
  if (meError) {
    return <div style={{ width: drawerWidth }}>Me query threw an error</div>
  } // data was fetched successfully

  const { user: { receivedFRequests } } = meData

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box'
        }
      }}
      variant="permanent"
      anchor="left"
    >
      {/* Panel navigation tabs */}
      <NavDrawerTabs tabIndex={tabIndex} onTabChange={handleTabChange} />

      <Divider />

      <FriendRequestsList requests={receivedFRequests} />
    </Drawer>
  )
}
