/**
 * TODO: Implement error messages for mutation errors
 * Form level validation is already done
 */

// Model imports
import React, {
  useCallback
} from 'react'
import { useMutation } from '@apollo/client'
import { Formik } from 'formik'
import {
  Avatar,
  Button,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  Container
} from '@mui/material'
import { LockOutlined } from '@mui/icons-material'
import * as Yup from 'yup'

// Internal imports
import Copyright from './Copyright'
import LOGIN from '../graphql/mutations/Login'
import { setAccessToken } from '../accessToken'

// For form level validation with Yup and Formik
const LoginSchema = Yup.object().shape({
  nickname: Yup.string()
    // Cannot begin or end with space
    // Need uniqueness at database level validation
    .min(3, 'Too short. Must be 3 characters or more.')
    .max(50, 'Too long. Maximum 50 characters.')
    .required('Required'),
  password: Yup.string()
    .min(5, 'Too short. Must be 3 characters or more.')
    .max(100, 'Too long. Maximum 100 characters.')
    .required('Required')
})

export default function LoginForm({ handleLogin }) {
  /**
   * GraphQL Hooks
   */
  // Login mutation
  const [login, {
    data: loginData, loading: loginLoading, error: loginError, reset: loginReset
  }] = useMutation(LOGIN)

  // The mutation results returned the mutation function is used like this
  // instead of trying to useEffect to save the access token because
  // this is the best way of making sure that the code to store the
  // Access token is used once and only once per click of the login button.
  const onSubmit = useCallback(async (values) => {
    try {
      const { data } = await login({ variables: values })
      // There was no error in the above line, which means login was successful.
      // So, response.data exists
      setAccessToken(data.login.accessToken)

      // Wait an instant and handleLogin,
      // which closes the modal by changing the isLoginState
      setTimeout(handleLogin, 600)
    } catch {
      // There should be nothing here. I am intentionally supressing the error
      // because the error that would be caught here is the same as loginError.
    }
  }, [])
  /**
   * I'm pretty sure I can take the whole above function outside of this component scope. TODO
   */

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        {/* Form element */}
        <Formik
          initialValues={{
            nickname: '',
            password: ''
          }}
          validationSchema={LoginSchema}
          onSubmit={onSubmit}
        >{
          ({
            values,
            handleChange,
            handleSubmit,
            resetForm,
            errors,
            handleBlur,
            isSubmitting,
            touched
          }) => {
            return (
              <Box component="form" noValidate sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="nickname"
                      label="Nickname"
                      name="nickname"
                      autoComplete="nickname"
                      value={values.nickname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {
                      errors?.nickname && touched.nickname
                        ? (<div>{errors.nickname}</div>)
                        : null
                    }
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {
                      errors?.password && touched.password
                        ? (<div>{errors.password}</div>)
                        : null
                    }
                  </Grid>
                  {/* Login success message */}
                  <Grid item xs={12}>
                    <Typography>**data: {loginData?.login?.accessToken ? 'Got an accessToken' : 'Does not have an accessToken yet'}</Typography>
                    <Typography>**loading: {JSON.stringify(loginLoading)}</Typography>
                  </Grid>
                  {/* Error Messages */}
                  <Grid item xs={12}>
                    <Typography>**error: {JSON.stringify(loginError)}</Typography>
                  </Grid>
                </Grid>
                {/* Login button */}
                <Button
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onMouseUp={handleSubmit}
                  disabled={isSubmitting}
                >
                  Login
                </Button>
                {/* Clear button
                    Clears both formik and graphql */}
                <Button
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onMouseUp={() => { resetForm(); loginReset() }}
                  disabled={isSubmitting}
                >
                  Clear
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link href="#" variant="body2">
                      {"Don't have an account? Register"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            )
          }
        }</Formik>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  )
}
