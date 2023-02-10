// MUI
import Box from "@mui/material/Stack"
import styled from "@mui/material/styles/styled"

// Components
import SubjectsList from "./SubjectsList"

export default function SideBar({ me /* User type */ }) {
  if (me.friends.length) {
    return <SubjectsList me={me} />
  }

  return (
    <div>You dont have any friends yet</div>
  )
}
