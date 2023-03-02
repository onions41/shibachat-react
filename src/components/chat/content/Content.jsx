// MUI
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"

// Module imports
import { useParams } from "react-router-dom"

// Children
import MessagesList from "./MessagesList"
import InputBox from "./InputBox"
import Header from "./Header"
import Typography from "@mui/material/Typography"

export default function Content({ me }) {
  // I should replace subject with contact. Not sure why I used that word.
  const { subjectId: subjectIdStr } = useParams()
  const subjectId = parseInt(subjectIdStr, 10)
  const subject = me.friends.find((friend) => friend.id === subjectId)

  // To show a background pattern when no contact is selected
  const backgroundCss = !subjectId
    ? {
        background: "url('shiba_wallpaper.png') repeat 30px 30px / 315px;",
        boxShadow: "inset 0 0 0 100vmax rgba(255, 255, 255, .96)",
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8
      }
    : {}

  return (
    <Stack sx={{ height: "100%", ...backgroundCss }}>
      {subject ? <Header subject={subject} /> : null}
      {subjectId ? (
        <>
          <Box
            sx={{
              // height: "calc(100% - 72px)", // compensating for the border of the ContentContainer in Chat
              overflowY: "scroll",
              flexGrow: 1,
              flexShrink: 1,
              display: "flex",
              flexDirection: "column-reverse",
              boxShadow:
                "inset 0px -12px 12px -12px rgba(0,0,0,0.2), inset 0px -8px 8px -8px rgba(0,0,0,0.2), inset 0px -4px 4px -4px rgba(0,0,0,0.2)"
            }} // This flex column reverse is soley used to start the scrolling of the box at the bottom, even though there is only one child.
          >
            <MessagesList
              me={me}
              subjectId={subjectId}
            />
          </Box>
          <Box sx={{ height: "auto" }}>
            <InputBox receiverId={subjectId} />
          </Box>
        </>
      ) : (
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              color: "rgba(183, 176, 164, 0.4)",
              fontSize: "100px",
              fontFamily: "'Windsurf', sans-serif;"
            }}
          >
            Wow!
          </Typography>
        </Box>
      )}
    </Stack>
  )
}
