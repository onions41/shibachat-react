// Module imports
import React, {
  useState,
  useCallback
} from 'react'
import { Formik } from 'formik'
import styled from 'styled-components'
import {
  TextField,
  InputAdornment,
  IconButton,
  Button,
  Link,
  Typography
} from '@mui/material'
import {
  VisibilityOff,
  Visibility,
  Send as SendIcon
} from '@mui/icons-material'
import authInput from '../inputValidation/authInput'
import REGISTER from '../graphql/mutations/Register'
import { useMutation } from '@apollo/client'
import { useDispatch, useSelector } from 'react-redux'

// Internal imports
import {
  loginAction,
  logoutAction,
  selectIsLoggedIn
} from '../store'

const FormContainer = styled.div`
  width: min(500px, 100%);
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default function RegisterForm() {
  // Register mutation hook
  // data is used inside onSubmit
  // loading is not used as it is redundent to Formik's isSubmitting
  const [register, {
    error: gqlError, reset
  }] = useMutation(REGISTER, { fetchPolicy: 'network-only' })

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
      window.history.back() // Navigate back to the secured route from which the user came

      // No need to call setSubmitting(false)
      // as automatically done by Formik when an async onSubmit is used
    } catch {
      // There should be nothing here. I am intentionally supressing the error
      // because the error that would be caught here is the same as gqlError.
    }
  }, [])

  return (
    <Formik
      initialValues={{
        nickname: '',
        password: ''
      }}
      validationSchema={authInput}
      onSubmit={onSubmit}
    >
      {
        ({
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
                  errors?.nickname && touched.nickname &&
                  errors.nickname
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
                  errors?.password && touched.password &&
                  errors.password
                }
                type={showPassword ? 'text' : 'password'}
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
                        onMouseEnter={() => { setShowPassword(true) }}
                        onMouseLeave={() => { setShowPassword(false) }}
                        edge="end"
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
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
              {/* GQL Error message */}
              <Link
                onClick={() => window.history.back()}
                disabled={isSubmitting}
                sx={{
                  marginTop: 4,
                  marginBottom: 2
                }}
              >
                Already registered? Go back!
              </Link>
              {/* Go back link */}
              <Typography>
                {`gqlErrors: ${gqlError}`}
              </Typography>
            </FormContainer>
          )
        }
      }
    </Formik>
  )
}
