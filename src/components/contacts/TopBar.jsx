import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import PersonAddIcon from "@mui/icons-material/PersonAdd"
import SearchIcon from "@mui/icons-material/Search"
import TextField from "@mui/material/TextField"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import InputAdornment from "@mui/material/InputAdornment"
import { useState } from "react"
import FReqModal from "./FReqModal/FReqModal"

const iconFormat = {
  color: "text.secondary",
  padding: "8px",
  fontSize: "23px",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "border.gray",
  borderRadius: "100px",
  boxSizing: "content-box",
  "&:hover": {
    borderColor: "border.black"
  }
}

const cateFormat = {
  color: "text.secondary",
  padding: "8px 16px",
  fontFamily: "'Windsurf', sans-serif;",
  backgroundColor: "border.gray",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "border.gray",
  borderRadius: "100px",
  // lineHeight: 1,
  // boxSizing: "content-box",
  "&:hover": {
    borderColor: "border.black"
  }
}

export default function TopBar({ me }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
        // backgroundColor: "plum"
      }}
    >
      <Stack
        direction="row"
        spacing={1}
      >
        <Typography sx={cateFormat}>Friends</Typography>
        <Typography sx={cateFormat}>Groups</Typography>
      </Stack>
      <Stack
        direction="row"
        spacing={1}
      >
        <TextField
          size="small"
          color="secondary"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="search"
                  // onClick={handleClickShowPassword} // lift this one up so you can filter with the
                  edge="end"
                >
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            )
          }}
          sx={{
            // fieldset is the element that defines the border
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                // Mouse not over
                borderRadius: "1000px",
                borderColor: "border.gray"
              },
              "&:hover fieldset": {
                // Mouse over
                borderColor: "border.black"
              },
              "&.Mui-focused fieldset": {
                // Focused
                borderColor: "secondary.main"
              }
            }
          }}
        />
        <PersonAddIcon
          onClick={() => setIsModalOpen(true)}
          sx={{
            ...iconFormat,
            backgroundColor: isModalOpen ? "secondary.light" : "border.gray"
          }}
        />
      </Stack>
      <FReqModal
        isOpen={isModalOpen}
        handleClose={() => setIsModalOpen(false)}
        me={me}
      />
    </Box>
  )
}
