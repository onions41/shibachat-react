// Module imports
import React from "react"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

// Internal imports
import { selectIsLoggedIn } from "../../store/authSlice"

/**
 * Uses the Redux login state to conditionally render the route.
 */
export default function RequiresAuth({ children }) {
  const isLoggedIn = useSelector(selectIsLoggedIn)

  if (!isLoggedIn) {
    return (
      <Navigate
        to="/login"
        replace
      />
    )
  }

  return children
}
