// MUI
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"

// Internal imports
import Menu from "./menu/Menu"

export default function Template({ children }) {
  return (
    <Stack sx={{ width: "100vw", height: "100vh", backgroundColor: "blue" }}>
      <Menu />
      <Box sx={{ height: "calc(100vh - 80px)", backgroundColor: "sandybrown" }}>{children}</Box>
    </Stack>
  )
}
