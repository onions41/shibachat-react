// MUI
import Box from "@mui/material/Box"

// Internal imports
import Drawer from "./drawer/Drawer"
import InputBar from "./inputBar/InputBar"

export default function UserControls({ children }) {
  return (
    <Box sx={{ width: "100vw", height: "100vh", display: "flex" }}>
      <Drawer />
      {/* flex grow one so it fills the page horizontally */}
      <Box sx={{ flex: "1" }}>
        <Box
          sx={{
            height: "calc(100% - 70px)",
            overflow: "scroll",
            display: "flex",
            flexDirection: "column-reverse"
          }} // This flex column reverse is soley used to start the scrolling of the box at the bottom, even though there is only one child.
        >
          {children}
        </Box>
        <Box sx={{ height: 70 }}>
          <InputBar />
        </Box>
      </Box>
    </Box>
  )
}
