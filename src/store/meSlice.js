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
const meSlice = createSlice({
  name: "me",
  initialState: {
    meQueryDone: false
  },
  reducers: {
    done: (state) => {
      state.meQueryDone = true
    },
    reset: (state) => {
      state.meQueryDone = false
    }
  }
})

// The sliced is used to create a store.
// A store is not needed to use redux states inside function componenets
// because useDispatch and useSelector hooks can be used inside the components.
// A store is needed to change/access the state outside of a function component.
export default meSlice

// Actions
// These actions can be imported and used inside React functional components
// with the useDespatch hook.
export const { done: doneAction, reset: resetAction } = meSlice.actions

// Selectors
// These selectors can be imported and used as state inside
// React functional components with the useSelector hook.
export const selectMeQueryDone = (state) => state.me.meQueryDone
