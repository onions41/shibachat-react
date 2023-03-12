import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"

export default function ReceivedFReqCard({ fReq, acceptFRequest }) {
  return (
    <Box
      sx={{
        width: "135px",
        margin: "0 8px",
        backgroundColor: "background.white",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "border.gray",
        borderRadius: "32px"
      }}
    >
      <Avatar
        sx={{
          width: 37,
          height: 37,
          margin: "19px auto 12px",
          gridRow: "span 2",
          justifySelf: "center"
        }}
        alt="#"
        src="#"
      />
      <Typography
        sx={{ textAlign: "center", marginBottom: "12px", fontSize: "0.9rem" }}
      >
        {fReq.sender.nickname}
      </Typography>
      <Stack
        spacing={1}
        width={100}
        mx="auto"
        my={1.5}
      >
        {/* Accept Button */}
        <Button
          variant="outlined"
          color="secondary"
          onClick={() =>
            acceptFRequest({
              variables: {
                senderId: fReq.senderId
              }
            })
          }
          sx={{
            textTransform: "none",
            fontWeight: "bold",
            "&.MuiButtonBase-root": { borderRadius: "1000px", pt: "7px" },
            "&:hover": {
              color: "secondary.dark",
              backgroundColor: "secondary.light"
            }
          }}
          // disabled={cancelFReqLoading}
        >
          Accept
        </Button>

        {/* Do Not Want Button */}
        <Button
          variant="outlined"
          size="small"
          sx={{
            fontSize: "13px",
            textTransform: "none",
            "&.MuiButtonBase-root": { borderRadius: "1000px", pt: "7px" },
            "&:hover": {
              color: "primary.dark",
              backgroundColor: "primary.light"
            }
          }}
          // disabled={cancelFReqLoading}
        >
          Do Not Want
        </Button>
      </Stack>
    </Box>
  )
}
