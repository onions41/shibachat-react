// Module imports
import React, { useState, useCallback } from "react"
import { useQuery } from "@apollo/client"
import { Drawer, Divider } from "@mui/material"

// Internal imports
import NavDrawerTabs from "./NavDrawerTabs"
import FriendsNavPanel from "./friendsNavPanel/FriendsNavPanel"
import ME from "../../graphql/queries/Me"

export default function NavDrawer() {
  /**
   * GQL Hooks
   */
  const meResult = useQuery(ME)

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

      <NavDrawerContent tabIndex={tabIndex} meResult={meResult} />
    </Drawer>
  )
}

function NavDrawerContent({ tabIndex, meResult }) {
  const { data, error, loading } = meResult

  if (loading) {
    return <div style={{ width: "100%" }}>Loading the Me query</div>
  }

  if (error) {
    console.log("***Me query error: ", error)
    return <div style={{ width: "100%" }}>Me query threw an error</div>
  } // data was fetched successfully

  switch (tabIndex) {
    case 0:
      return (
        <div>
          Nothing here yet. The recent messages navigation panel would go here.
        </div>
      )
    case 1:
      return <FriendsNavPanel me={data.user} />
    case 2:
      return (
        <div>Nothing here yet. Maybe the account screen would go here.</div>
      )
    default:
  }
}
