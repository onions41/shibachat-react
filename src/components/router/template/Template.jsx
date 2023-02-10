// MUI
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"

// Internal imports
import Menu from "./menu/Menu"

export default function Template({ children }) {
  return (
    <Stack sx={{ width: "100vw", height: "100vh", backgroundColor: "sienna" }}>
      <Menu />
      <Box sx={{ flexGrow: 1, backgroundColor: "sandybrown" }}>{children}</Box>
    </Stack>
  )
}
