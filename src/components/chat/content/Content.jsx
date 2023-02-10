import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"

import MessagesList from "./MessagesList"

export default function Content({ me }) {
  return (
    <Stack sx={{ height: "100%" }}>
      <Box
        sx={{
          height: "calc(100% - 70px)",
          overflow: "scroll",
          display: "flex",
          flexDirection: "column-reverse"
        }} // This flex column reverse is soley used to start the scrolling of the box at the bottom, even though there is only one child.
      >
        <MessagesList me={me} />
      </Box>
    </Stack>
  )
}
