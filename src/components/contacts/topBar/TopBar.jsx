import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import PersonAddIcon from "@mui/icons-material/PersonAdd"
import SearchIcon from "@mui/icons-material/Search"
import TextField from "@mui/material/TextField"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import InputAdornment from "@mui/material/InputAdornment"
import { useState } from "react"
import FReqModal from "./fReqModal/FReqModal"

// Conditional styling for the icon button used for adding friends or other things
const addIconBtnStyle = (page, isModalOpen) => {
  if (page === "friends") {
    // Abled
    return {
      color: "text.secondary",
      padding: "8px",
      fontSize: "23px",
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "border.gray",
      borderRadius: "100px",
      boxSizing: "content-box",
      backgroundColor: isModalOpen ? "secondary.light" : "border.gray",
      "&:hover": {
        borderColor: "border.black",
        cursor: "pointer"
      }
    }
  }
  // Disabled
  return {
    color: "background.offWhite",
    padding: "8px",
    fontSize: "23px",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "grey.300",
    borderRadius: "100px",
    boxSizing: "content-box",
    backgroundColor: "grey.300"
  }
}

// Returns object used as sx prop for the buttons uses to navigate pages
const pageBtnStyle = (page, id) => {
  if (page === id) {
    // Active page
    return {
      color: "text.secondary",
      padding: "8px 16px",
      fontFamily: "'Windsurf', sans-serif;",
      backgroundColor: "secondary.light",
      borderWidth: "2px",
      borderStyle: "solid",
      borderColor: "secondary.main",
      borderRadius: "100px"
    }
  }
  // Inactive page
  return {
    color: "text.tertiary",
    padding: "8px 16px",
    fontFamily: "'Windsurf', sans-serif;",
    backgroundColor: "border.gray",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "border.gray",
    borderRadius: "100px",
    cursor: "pointer",
    "&:hover": {
      borderColor: "border.black"
    }
  }
}

export default function TopBar({ me, page, setPage }) {
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
        {/* Page navigation buttons */}
        <Typography
          id="friends"
          onClick={(e) => setPage(e.target.id)}
          sx={pageBtnStyle(page, "friends")}
        >
          Friends
        </Typography>
        <Typography
          id="blocked"
          onClick={(e) => setPage(e.target.id)}
          sx={pageBtnStyle(page, "blocked")}
        >
          Blocked
        </Typography>
      </Stack>
      <Stack
        direction="row"
        spacing={1}
      >
        {/* Search field. TODO: implement this, start by wrapping in Formik, onChange/onSubmit can probably be written using AI */}
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
        {/* Icon buttons */}
        <PersonAddIcon
          onClick={() => (page === "friends" ? setIsModalOpen(true) : null)}
          sx={addIconBtnStyle(page, isModalOpen)}
        />
      </Stack>
      {/* Modal that deals with sending and managing friend requests */}
      <FReqModal
        isOpen={isModalOpen}
        handleClose={() => setIsModalOpen(false)}
        me={me}
      />
    </Box>
  )
}
