/**
 * This is one way to use Redux. I find it works the best with a React app built with function components.
 * I found it is best to use configureStore and createSlice as these help to create a Redux store.
 * Creating a Redux store this way, you get to write the resolvers as if state is mutable because
 * thunk functionality is provided by createSlice. Createslice creates all states, reducers, actions, and
 * selectors. Then configureStore can create a Redux store using all the slices that you created.
 */

import { createSlice } from "@reduxjs/toolkit"

// Create a slice. A Redux store is made up of one or more slices,
// that is, if you want to slice up your logic.
const toastSlice = createSlice({
  name: "toast",
  initialState: {
    isOpen: true,
    atBottom: false,
    message: ""
  },
  reducers: {
    close: (state) => {
      state.isOpen = false
    },
    open: (state, action) => {
      state.atBottom = action.payload.atBottom
      state.message = action.payload.message
      state.isOpen = true
    }
  }
})

// The sliced is used to create a store.
// A store is not needed to use redux states inside function componenets
// because useDispatch and useSelector hooks can be used inside the components.
// A store is needed to change/access the state outside of a function component.
export default toastSlice

// Actions
// These actions can be imported and used inside React functional components
// with the useDespatch hook.
export const { open: openAction, close: closeAction } = toastSlice.actions

// Selectors
// These selectors can be imported and used as state inside
// React functional components with the useSelector hook.
export const selectIsOpen = (state) => state.toast.isOpen
export const selectAtBottom = (state) => state.toast.atBottom
export const selectMessage = (state) => state.toast.message
// Could have also written like this too.
// export const {
//   isOpen: selectIsOpen,
//   atBottom: selectAtBottom,
//   message: selectMessage
// } = (state) => state.toast
