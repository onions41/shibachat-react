// MUI
import styled from "@mui/material/styles/styled"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Link from "@mui/material/Link"
import Typography from "@mui/material/Typography"
import InputAdornment from "@mui/material/InputAdornment"
import IconButton from "@mui/material/IconButton"
import VisibilityIcon from "@mui/icons-material/Visibility"
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"
import SendIcon from "@mui/icons-material/Send"

// Module imports
import { useCallback, useState } from "react"
import { useMutation } from "@apollo/client"
import { Formik } from "formik"
import { Link as RouterLink, Navigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import authInput from "../inputValidation/authInput"

// Internal imports
import LOGIN from "../graphql/mutations/Login"
import { loginAction, selectIsLoggedIn } from "../store/authSlice"

const FormContainer = styled(Box)({
  width: "min(400px, 100%)",
  paddingLeft: 10,
  paddingRight: 10,
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
})

export default function LoginForm() {
  // Login mutation hook
  // data is used inside onSubmit
  // loading is not used as it is redundent to Formik's isSubmitting
  const [login, { error: gqlError, reset }] = useMutation(LOGIN, {
    fetchPolicy: "network-only"
  })

  // Redux
  const dispatch = useDispatch()
  const isLoggedIn = useSelector(selectIsLoggedIn)

  // The mutation results returned the mutation function is used like this
  // instead of trying to useEffect to save the access token because
  // this is the best way of making sure that the code to store the
  // Access token is used once and only once per click of the login button.
  const onSubmit = useCallback(async (values) => {
    try {
      const { data } = await login({ variables: values })
      // There was no error in the above line, which means login was successful.
      // So, response.data exists
      dispatch(loginAction(data.login))
      reset()

      // No need to call setSubmitting(false)
      // as automatically done by Formik when an async onSubmit is used
    } catch {
      // There should be nothing here. I am intentionally supressing the error
      // because the error that would be caught here is the same as loginError.
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
              label="Nickname"
              helperText={
                errors?.nickname && touched.nickname && errors.nickname
              }
              type="text"
              autoComplete="nickname"
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
              label="Password"
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
              Login
            </Button>
            {/* Link to /register */}
            <Link
              component={RouterLink}
              to="/register"
              disabled={isSubmitting}
              sx={{
                marginTop: 4,
                marginBottom: 2
              }}
            >
              Don&apos;t have an account? Register!
            </Link>
            {/* GQL Error message */}
            <Typography>{`gqlErrors: ${gqlError}`}</Typography>
          </FormContainer>
        )
      }}
    </Formik>
  )
}
