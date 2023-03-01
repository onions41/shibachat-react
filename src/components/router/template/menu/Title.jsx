import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"

export default function Title() {
  return (
    <Stack>
      {/* SHIBACHAT with shiny effect */}
      <Typography
        component="h1"
        fontSize="33px"
        gutterBottom={false}
        sx={{
          fontSize: "33px",
          fontFamily: "'Grisly Beast', sans-serif;",
          // Shiny effect
          backgroundColor: "primary.main",
          backgroundImage:
            "linear-gradient(-75deg, transparent 0, transparent 5%, rgba(255, 255, 255, 0.5) 5%, rgba(255, 255, 255, 0.5) 10%, transparent 10%, transparent 100%);",
          backgroundSize: "200% 100%",
          WebkitTextFillColor: "transparent",
          WebkitBackgroundClip: "text",
          transition: "1.2s",
          lineHeight: "1",
          "&:hover": { backgroundPosition: "-120% 0" }
        }}
      >
        SHIBACHAT
      </Typography>

      {/* A Place for Inus to Chat. in thin text below SHIBACHAT */}
      <Typography
        // fontFamily="'Grisly Beast', sans-serif;"
        gutterBottom={false}
        sx={{
          color: "#7d7267",
          fontFamily: "'Windsurf', sans-serif;",
          // fontWeight: "bold",
          fontSize: "20px",
          lineHeight: "1"
        }}
      >
        The Place where Inus Chat
      </Typography>
    </Stack>
  )
}
