// MUI
import Box from "@mui/material/Box"

// Internal imports
import Drawer from "./drawer/Drawer"
import InputBar from "./inputBar/InputBar"

export default function UserControls({ children }) {
  return (
    <Box sx={{ width: "100vw", height: "100vh", display: "flex" }}>
      <Drawer />
      <Box sx={{ flex: "1", display: "flex", flexDirection: "column" }}>
        <Box sx={{ flex: "1", display: "flex" }}>{children}</Box>
        <InputBar />
      </Box>
    </Box>
  )
}
