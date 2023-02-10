// Module imports
import { useEffect } from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { useLazyQuery } from "@apollo/client"
import { useSelector } from "react-redux"

// Internal imports
import { selectIsLoggedIn } from "store/authSlice"
import ME from "graphql/queries/Me"

// Routes
import Chat from "routes/Chat"
import Login from "routes/Login"
import Register from "routes/Register"

// Components
import Toast from "components/Toast"

export default function Router() {
  // Hooks
  const isLoggedIn = useSelector(selectIsLoggedIn)

  const [meQuery, { called, loading, error, data }] = useLazyQuery(ME, {
    fetchPolicy: "cache-and-network"
  }) // TODO. Consider polling this query later on

  // Executes the lazy query only once when logged in
  useEffect(() => {
    if (isLoggedIn) {
      meQuery()
    }
  }, [isLoggedIn])

  // End of Hooks

  // Do not use nested routes, this app is too simple to be using Outlets.
  // https://reactrouter.com/en/main/start/concepts#outlets
  return (
    <BrowserRouter>
      <Toast />
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Chat
                meCalled={called}
                meLoading={loading}
                meError={error}
                me={data?.user}
              />
            ) : (
              <Navigate
                to="/login"
                replace
              />
            )
          }
        />
        <Route
          path="/chat"
          element={
            isLoggedIn ? (
              <Chat
                meCalled={called}
                meLoading={loading}
                meError={error}
                me={data?.user}
              />
            ) : (
              <Navigate
                to="/login"
                replace
              />
            )
          }
        />
        <Route
          path="/chat/:subjectId"
          element={
            isLoggedIn ? (
              <Chat
                meCalled={called}
                meLoading={loading}
                meError={error}
                me={data?.user}
              />
            ) : (
              <Navigate
                to="/login"
                replace
              />
            )
          }
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/register"
          element={<Register />}
        />
        <Route
          path="/register"
          element={<Register />}
        />
        <Route
          path="/:everythingElse"
          element={<div>That route doesnt exist</div>}
        />
      </Routes>
    </BrowserRouter>
  )
}
