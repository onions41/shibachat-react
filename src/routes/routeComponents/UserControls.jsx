// MUI
import styled from "@mui/material/styles/styled"
import Box from "@mui/material/Box"

import NavDrawer from "../../components/navDrawer/NavDrawer"

// Just a placeholder for now
const InputBar = styled(Box)({
  width: "100%",
  height: 50,
  backgroundColor: "orange"
})

export default function UserControls({ children }) {
  return (
    <Box sx={{ width: "100vw", height: "100vh", display: "flex" }}>
      <NavDrawer />
      <Box sx={{ flex: "1", display: "flex", flexDirection: "column" }}>
        <Box sx={{ flex: "1", display: "flex" }}>{children}</Box>
        <InputBar />
      </Box>
    </Box>
  )
}
