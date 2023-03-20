import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Avatar from "@mui/material/Avatar"
import Typography from "@mui/material/Typography"

export default function BlockedFReqCard({ fReq, unblockFRequest }) {
  return (
    <Box
      sx={{
        paddingBottom: "10px",
        margin: "5px 0",
        backgroundColor: "background.white",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "border.gray",
        borderRadius: "32px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
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

      {/* Unblock Button (fRequest) */}
      <Button
        variant="outlined"
        size="small"
        onClick={() =>
          unblockFRequest({
            variables: {
              senderId: fReq.senderId
            }
          })
        }
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
        Unblock
      </Button>
    </Box>
  )
}
