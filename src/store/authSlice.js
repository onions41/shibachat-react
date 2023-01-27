/**
 * This is one way to use Redux. I find it works the best with a React app built with function components.
 * I found it is best to use configureStore and createSlice as these help to create a Redux store.
 * Creating a Redux store this way, you get to write the resolvers as if state is mutable because
 * thunk functionality is provided by createSlice. Createslice creates all states, reducers, actions, and
 * selectors. Then configureStore can create a Redux store using all the slices that you created.
 */

import { createSlice } from "@reduxjs/toolkit"
// Access token is stored outside of Redux store, as it is not used as state
// and is easier to access when it is just a global variable.
import { setAccessToken } from "../accessToken"

// Create a slice. A Redux store is made up of one or more slices,
// that is, if you want to slice up your logic.
const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true
      setAccessToken(action.payload)
    },
    logout: (state) => {
      state.isLoggedIn = false
      setAccessToken("")
    }
  }
})

export default authSlice

// Actions
// These actions can be imported and used inside React functional components
// with the useDespatch hook.
export const { login: loginAction, logout: logoutAction } = authSlice.actions

// Selectors
// These selectors can be imported and used as state inside
// React functional components with the useSelector hook.
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn
