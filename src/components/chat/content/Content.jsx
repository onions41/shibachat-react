// MUI
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"

// Module imports
import { useParams } from "react-router-dom"

// Children
import MessagesList from "./MessagesList"
import InputBox from "./InputBox"
import Header from "./Header"

export default function Content({ me }) {
  // The interlocuter with whom I'm communicating.
  const { subjectId: subjectIdStr } = useParams()
  const subjectId = parseInt(subjectIdStr, 10)
  const subject = me.friends.find((friend) => friend.id === subjectId)

  return (
    <Stack sx={{ height: "100%" }}>
      {subject ? <Header subject={subject} /> : null}
      <Box
        sx={{
          // height: "calc(100% - 72px)", // compensating for the border of the ContentContainer in Chat
          overflow: "scroll",
          flexGrow: 1,
          flexShrink: 1,
          display: "flex",
          flexDirection: "column-reverse",
          boxShadow:
            "inset 0px -12px 12px -12px rgba(0,0,0,0.2), inset 0px -8px 8px -8px rgba(0,0,0,0.2), inset 0px -4px 4px -4px rgba(0,0,0,0.2)"
        }} // This flex column reverse is soley used to start the scrolling of the box at the bottom, even though there is only one child.
      >
        <MessagesList me={me} subjectId={subjectId} />
      </Box>
      <Box sx={{ height: "auto" }}>
        <InputBox receiverId={subjectId}/>
      </Box>
    </Stack>
  )
}
