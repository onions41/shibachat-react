// Module imports
import { Snackbar, Alert } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"

// Internal imports
import {
  closeAction,
  selectAtBottom,
  selectIsOpen,
  selectMessage
} from "../../store/toastSlice"

export default function Toast() {
  // Redux
  const dispatch = useDispatch()
  const isOpen = useSelector(selectIsOpen)
  const atBottom = useSelector(selectAtBottom)
  const message = useSelector(selectMessage)

  return (
    <Snackbar
      open={isOpen}
      // autoHideDuration={6000}
      // onClose={handleClose} // Closes when clicked out of focus
      anchorOrigin={{
        vertical: atBottom ? "bottom" : "top",
        horizontal: "center"
      }}
      sx={{
        position: "fixed",
        transform: "translate(-50%, -50%)"
      }}
    >
      <Alert
        severity="success"
        onClose={dispatch(closeAction())} // Closes when x to the right of alert is clicked
      >
        {message}
      </Alert>
    </Snackbar>
  )
}
