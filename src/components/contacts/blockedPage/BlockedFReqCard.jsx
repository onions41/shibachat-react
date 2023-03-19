import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"

export default function BlockedFReqCard({ fReq }) {
  return (
    <Box
      sx={{
        height: "150px",
        margin: "6px 0",
        border: "2px plum dotted",
        borderRadius: "8px",
        // backgroundColor: "lightgreen"
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <Typography
        sx={{ textAlign: "center", marginBottom: "12px", fontSize: "0.9rem" }}
      >
        Marge Davisson
      </Typography>
      <Button
        variant="outlined"
        size="small"
        // onClick={() =>
        //   blockFRequest({
        //     variables: {
        //       senderId: fReq.senderId
        //     }
        //   })
        // }
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
