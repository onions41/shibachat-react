// Module imports
import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

// Routes
import Home from './Home'
import Register from './Register'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
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
    </BrowserRouter>
  )
}
