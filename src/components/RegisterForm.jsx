// MUI
import styled from "@mui/material/styles/styled"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import InputAdornment from "@mui/material/InputAdornment"
import IconButton from "@mui/material/IconButton"
import Button from "@mui/material/Button"
import Link from "@mui/material/Link"
import Typography from "@mui/material/Typography"
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"
import VisibilityIcon from "@mui/icons-material/Visibility"
import SendIcon from "@mui/icons-material/Send"

// Module imports
import { useState, useCallback } from "react"
import { Formik } from "formik"
import { useMutation } from "@apollo/client"
import { useDispatch, useSelector } from "react-redux"
import { Link as RouterLink, Navigate } from "react-router-dom"

// Internal imports
import { loginAction, selectIsLoggedIn } from "../store/authSlice"
import authInput from "../inputValidation/authInput"
import REGISTER from "../graphql/mutations/Register"

const FormContainer = styled(Box)({
  width: "min(400px, 100%)",
  paddingLeft: 10,
  paddingRight: 10,
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
})

export default function RegisterForm() {
  // Register mutation hook
  // data is used inside onSubmit
  // loading is not used as it is redundent to Formik's isSubmitting
  const [register, { error: gqlError, reset }] = useMutation(REGISTER, {
    fetchPolicy: "network-only"
  })

  // Redux
  const dispatch = useDispatch()
  const isLoggedIn = useSelector(selectIsLoggedIn)

  // Form submissions callback
  const onSubmit = useCallback(async (values) => {
    try {
      const { data } = await register({ variables: values })
      // There was no error in the above line, which means mutation was successful.
      // So, data exists
      dispatch(loginAction(data.register))
      reset() // Clear the mutation data

      // No need to call setSubmitting(false)
      // as automatically done by Formik when an async onSubmit is used
    } catch {
      // There should be nothing here. I am intentionally supressing the error
      // because the error that would be caught here is the same as gqlError.
    }
  }, [])

  if (isLoggedIn) {
    return (
      <Navigate
        to="/"
        replace
      />
    )
  }

  return (
    <Formik
      initialValues={{
        nickname: "",
        password: ""
      }}
      validationSchema={authInput}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={onSubmit}
    >
      {({
        values,
        handleChange,
        handleSubmit,
        errors,
        handleBlur,
        isSubmitting,
        touched
      }) => {
        const [showPassword, setShowPassword] = useState(false)

        return (
          <FormContainer>
            {/* Nickname input */}
            <TextField
              id="nickname-input"
              name="nickname"
              label="Choose a nickname"
              helperText={
                errors?.nickname && touched.nickname && errors.nickname
              }
              type="text"
              variant="filled"
              fullWidth
              value={values.nickname}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors?.nickname && touched.nickname}
              autoFocus
              sx={{
                marginTop: 2,
                marginBottom: 2
              }}
            />
            {/* Password input */}
            <TextField
              id="password-input"
              name="password"
              label="Set a password"
              helperText={
                errors?.password && touched.password && errors.password
              }
              type={showPassword ? "text" : "password"}
              variant="filled"
              fullWidth
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors?.password && touched.password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onMouseEnter={() => {
                        setShowPassword(true)
                      }}
                      onMouseLeave={() => {
                        setShowPassword(false)
                      }}
                      edge="end"
                    >
                      {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
              sx={{
                marginTop: 2,
                marginBottom: 2
              }}
            />
            {/* Submit button */}
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              onClick={handleSubmit}
              fullWidth
              disabled={isSubmitting || !values.nickname || !values.password}
              sx={{
                marginTop: 4,
                marginBottom: 2
              }}
            >
              Register
            </Button>
            {/* Go back link */}
            <Link
              component={RouterLink}
              to="/login"
              disabled={isSubmitting}
              sx={{
                marginTop: 4,
                marginBottom: 2
              }}
            >
              Already registered? Login!
            </Link>
            {/* GQL Error message */}
            <Typography>{`gqlErrors: ${gqlError}`}</Typography>
          </FormContainer>
        )
      }}
    </Formik>
  )
}
