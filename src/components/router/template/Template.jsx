import Box from "@mui/material/Box"
import Menu from "./menu/Menu"

export default function Template({ children }) {
  return (
    <Box sx={{ width: "100vw", height: "100vh", backgroundColor: "background.offWhite" }}>
      <Box
        sx={{
          height: "70px",
          backgroundColor: "background.white",
          borderBottomWidth: "1px",
          borderBottomColor: "border.gray",
          borderBottomStyle: "solid"
        }}
      >
        <Menu />
      </Box>
      <Box
        sx={{
          height: "calc(100vh - 70px)"
        }}
      >
        {children}
      </Box>
    </Box>
  )
}
