// MUI
import Container from "@mui/material/Container"

import Logo from "./Logo"
import Links from "./Links"

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
      <Links />
    </Container>
  )
}
