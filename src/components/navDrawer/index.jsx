// Module imports
import React, { useState, useCallback } from "react"

import { Drawer, Divider } from "@mui/material"

// Internal imports
import NavDrawerTabs from "./NavDrawerTabs"
import FriendsNavPanel from "./FriendsNavPanel"

export default function NavDrawer() {
  /**
   * tabIndex is used to conditionally render different drawer content.
   * 0 for first tab, 1 for second tab...
   */
  const [tabIndex, setTabIndex] = useState(0)
  const handleTabChange = useCallback((_event, newValue) => {
    setTabIndex(newValue)
  }, [])

  const drawerWidth = 280

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box"
        }
      }}
      variant="permanent"
      anchor="left"
    >
      {/* Panel navigation tabs */}
      <NavDrawerTabs
        tabIndex={tabIndex}
        onTabChange={handleTabChange}
      />

      <Divider />

      <NavPanel tabIndex={tabIndex} />
    </Drawer>
  )
}

function NavPanel({ tabIndex }) {
  switch (tabIndex) {
    case 0:
      return (
        <div>
          Nothing here yet. The recent messages navigation panel would go here.
        </div>
      )
    case 1:
      return <FriendsNavPanel />
    case 2:
      return (
        <div>Nothing here yet. Maybe the account screen would go here.</div>
      )
    default:
  }
}
