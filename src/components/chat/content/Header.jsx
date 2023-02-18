// MUI
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

export default function Header({ subject }) {
  return (
    <Box
      sx={{
        padding: "18px 16px 12px",
        borderBottom: "1px rgba(0, 0, 0, 0.12) solid",
        textAlign: "center"
      }}
    >
      <Typography
        variant="body2"
        color="text.tertiary"
      >
        Chatting with
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        fontWeight={700}
      >
        {subject.nickname}
      </Typography>
    </Box>
  )
}
