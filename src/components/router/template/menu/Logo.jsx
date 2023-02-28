import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

export default function Logo() {
  return (
    <Stack
      direction="row"
      spacing={0}
      alignItems="end"
    >
      <img
        src="/inu_logo.png"
        width="48px"
      />
      <Typography variant="h1">A place for inus to chat</Typography>
    </Stack>
  )
}
