// Module imports
import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Snackbar, Alert } from "@mui/material"

// Routes
import Chat from "./Chat"
import Login from "./Login"
import Register from "./Register"

// Internal imports
import RequiresAuth from "./routeComponents/RequiresAuth"
import UserControls from "./routeComponents/UserControls"
import Toast from "./routeComponents/Toast"

import DevBar from "../components/DevBar"

export default function Router() {
  return (
    <BrowserRouter>
      <Toast />
      <Routes>
        <Route
          path="/"
          element={
            <RequiresAuth>
              <UserControls>
                <Chat />
              </UserControls>
            </RequiresAuth>
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
        {/* <Route path="/teams" element={<RequiresAuth><ViewTeams /></RequiresAuth>} />
        <Route path="/teams/:teamId" element={<RequiresAuth><ViewTeams /></RequiresAuth>} />
        <Route path="/teams/:teamId/:chatMode" element={<RequiresAuth><ViewTeams /></RequiresAuth>} />
        <Route path="/teams/:teamId/:chatMode/:subjectId" element={<RequiresAuth><ViewTeams /></RequiresAuth>} />
        <Route
          path="/teams/new"
          element={
            <RequiresAuth><CreateTeam /></RequiresAuth>
          }
        /> */}
      </Routes>
      <DevBar />
    </BrowserRouter>
  )
}
