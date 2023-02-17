// MUI
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

export default function Header() {
  return (
    <Box
      sx={{
        padding: "24px 16px 16px",
        borderBottom: "1px rgba(0, 0, 0, 0.12) solid"
      }}
    >
      <Typography variant="h1">Messages</Typography>
    </Box>
  )
}
