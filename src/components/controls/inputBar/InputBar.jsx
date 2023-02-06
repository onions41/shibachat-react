// MUI
import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"

// Module imports
import { useCallback } from "react"
import { useParams } from "react-router-dom"
import { Formik } from "formik"
import { useMutation } from "@apollo/client"

// Internal imports
import SEND_MESSAGE from "graphql/mutations/SendMessage"

export default function InputBar() {
  // Hooks
  const { subjectId } = useParams()

  const [sendMessage, { reset: resetMutation }] = useMutation(SEND_MESSAGE)

  const onSubmit = useCallback((values, { resetForm, setSubmitting }) => {
    values.textContent = values.textContent.trim()
    sendMessage({ variables: values })
    resetMutation()
    resetForm()
    setSubmitting(false)
  }, [])

  // End of Hooks

  return (
    <Formik
      initialValues={{ textContent: "", receiverId: parseInt(subjectId, 10) }}
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
          <Stack
            direction="row"
            spacing={1}
            width="100%"
            // height="70px"
            padding="8px"
            backgroundColor="orange"
          >
            <Button
              variant="contained"
              onClick={handleSubmit}
              disabled={isSubmitting || !values.textContent}
            >
              Send
            </Button>
            <TextField
              name="textContent"
              variant="outlined"
              fullWidth={true}
              placeholder="type something here to send"
              sx={{ backgroundColor: "#cbd1d1" }}
              value={values.textContent}
              onChange={handleChange}
            />
          </Stack>
        )
      }}
    </Formik>
  )
}
