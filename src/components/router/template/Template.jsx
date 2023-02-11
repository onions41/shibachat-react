// MUI
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import useTheme from "@mui/material/styles/useTheme"

// Internal imports
import Menu from "./menu/Menu"

export default function Template({ children }) {
  const { palette } = useTheme()

  return (
    <Box sx={{ width: "100vw", height: "100vh", backgroundColor: palette.background.offWhite }}>
      <Box
        sx={{
          height: "80px",
          backgroundColor: palette.background.white,
          borderBottomWidth: "1px",
          borderBottomColor: palette.border.gray,
          borderBottomStyle: "solid"
        }}
      >
        <Menu />
      </Box>
      <Box
        sx={{
          height: "calc(100vh - 80px)"
        }}
      >
        {children}
      </Box>
    </Box>
  )
}
