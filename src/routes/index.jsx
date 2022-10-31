// Module imports
import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

// Routes
import Chat from './Chat'
import Login from './Login'
import Register from './Register'

// Route wrappers
import RequiresAuth from '../components/RequiresAuth'
import UserControls from '../components/UserControls'

import DevBar from '../components/DevBar'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <RequiresAuth><UserControls><Chat /></UserControls></RequiresAuth>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
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
