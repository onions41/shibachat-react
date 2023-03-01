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
      <img
        src="/inu_logo.png"
        width="40px"
      />
      <img
        src="/inu_logo.png"
        width="32px"
      />
    </Stack>
  )
}
