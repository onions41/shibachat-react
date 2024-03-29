// MUI
import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import styled from "@mui/material/styles/styled"

// Module imports
import { useCallback } from "react"
import { Formik } from "formik"
import { useMutation } from "@apollo/client"

// Internal imports
import SEND_MESSAGE from "graphql/mutations/SendMessage"

// Customizes border design and highlighting behavior
const StyledTextField = styled(TextField)(({ theme }) => ({
  backgroundColor: theme.palette.background.white,
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      // Mouse not over
      borderWidth: 3,
      borderRadius: 0,
      borderColor: theme.palette.background.white
    },
    "&:hover fieldset": {
      // Mouse over
      borderColor: theme.palette.background.white
    },
    "&.Mui-focused fieldset": {
      // Focused
      borderWidth: 3,
      borderColor: theme.palette.secondary.main
    }
  }
}))

const SendBtnContainer = styled(Stack)(() => ({
  width: "100%",
  padding: "10px 18px"
}))

// Gets rid of the box shadow and applies minor style tweeks
const SendButton = styled(Button)(({ theme }) => ({
  fontSize: "1rem",
  fontWeight: "bold",
  paddingTop: "8px",
  paddingBottom: "6px",
  boxShadow: "none",
  backgroundColor: theme.palette.secondary.main,
  "&:hover": {
    boxShadow: "none",
    backgroundColor: theme.palette.secondary.dark
  },
  "&:active": {
    boxShadow: "none"
  },
  "&:focus": {
    boxShadow: "none"
  }
}))

export default function InputBox({ receiverId }) {
  // Hooks
  const [sendMessage, { reset: resetMutation }] = useMutation(SEND_MESSAGE)

  const onSubmit = useCallback((values, { resetForm, setSubmitting }) => {
    const textContent = values.textContent.trim()
    sendMessage({ variables: { receiverId, textContent } })
    resetMutation()
    resetForm()
    setSubmitting(false)
  }, [receiverId])

  // End of Hooks

  return (
    <Formik
      initialValues={{ textContent: "" }}
      // validationSchema={authInput}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={onSubmit}
    >
      {({
        values,
        handleChange,
        handleSubmit,
        // errors,
        // handleBlur,
        isSubmitting
        // touched
      }) => {
        return (
          // Form container
          <Stack>
            {/* Text Field */}
            <StyledTextField
              name="textContent"
              value={values.textContent}
              onChange={handleChange}
              variant="outlined"
              fullWidth={true}
              multiline={true}
              rows={3}
              placeholder="Write your message"
            />
            <SendBtnContainer direction="row-reverse">
              <SendButton
                variant="contained"
                onClick={handleSubmit}
                disabled={isSubmitting || !values.textContent.trim()}
              >
                SEND
              </SendButton>
            </SendBtnContainer>
          </Stack>
        )
      }}
    </Formik>
  )
}
