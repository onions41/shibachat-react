/**
 * This store.js file is not even needed if Redux is used within function components only
 */

// External imports
import { configureStore } from "@reduxjs/toolkit"

// Internal imports
import authSlice from "./authSlice"
import toastSlice from "./toastSlice"

// Exports store
// store.dispatch(loginAction(payload)) and more can be done anywhere in the code
export default configureStore({
  reducer: {
    auth: authSlice.reducer,
    toast: toastSlice.reducer
  }
})
