import Container from "@mui/material/Container"

import Logo from "./Logo"
import Title from "./Title"
import Links from "./links/Links"

export default function Menu() {
  return (
    <Container
      maxWidth={false}
      sx={{
        height: "100%",
        display: "flex",
        backgroundColor: "primary.light",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <Logo />
      <Title />
      <Links />
    </Container>
  )
}
