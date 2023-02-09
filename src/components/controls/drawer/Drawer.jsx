// Module imports
import { useState, useCallback, useEffect } from "react"
import { useLazyQuery } from "@apollo/client"
import { Drawer, Divider } from "@mui/material"
import { useDispatch } from "react-redux"

// Internal imports
import DrawerTabs from "./DrawerTabs"
import FriendsNavPanel from "./friendsTab/FriendsTab"
import ME from "graphql/queries/Me"
import { doneAction, resetAction } from "store/meSlice"

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
      <DrawerTabs
        tabIndex={tabIndex}
        onTabChange={handleTabChange}
      />

      <Divider />

      <NavDrawerContent tabIndex={tabIndex} />
    </Drawer>
  )
}

function NavDrawerContent({ tabIndex }) {
  const dispatch = useDispatch()

  // Lazy query is used so it can be refreshed with a button
  const [meQuery, { called, loading, error, data }] = useLazyQuery(ME, {
    fetchPolicy: "cache-and-network"
  })

  // Executes the lazy query just once after the first render
  useEffect(() => {
    meQuery()
  }, [])

  // Whenever data changes the fetchWasSuccessful Redux state is updated
  useEffect(() => {
    if (data) {
      dispatch(doneAction())
    } else {
      dispatch(resetAction())
    }
  }, [data])

  if (!called) {
    return null
  }

  if (loading) {
    return <div style={{ width: "100%" }}>Loading the Me query</div>
  }

  if (error) {
    console.log("***Me query error: ", error)
    return (
      <div style={{ width: "100%" }}>
        Me query threw an error. Logged to console.
      </div>
    )
  }
  // data was fetched successfully

  switch (tabIndex) {
    case 0:
      return (
        <div>
          Nothing here yet. The recent messages navigation panel would go here.
        </div>
      )
    case 1:
      return (
        <FriendsNavPanel
          me={data.user}
          meQuery={meQuery}
        />
      )
    case 2:
      return (
        <div>Nothing here yet. Maybe the account screen would go here.</div>
      )
    default:
  }
}
