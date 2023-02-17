// Components
import Header from "./Header"
import SubjectsList from "./SubjectsList"

export default function SideBar({ me /* User type */ }) {
  return (
    <>
      <Header />
      <SubjectsList me={me} />
    </>
  )
}
