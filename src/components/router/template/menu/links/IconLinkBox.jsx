import Box from "@mui/material/Box"
import useTheme from "@mui/material/styles/useTheme"
import { Link as RouterLink, useLocation } from "react-router-dom"

// Put the icons in this box to highlight the icons
// and bottom border on mouse hover
export default function IconLinkBox({ path, children }) {
  const { palette } = useTheme()
  const { pathname } = useLocation() // e.g. /chat/whatever

  const Cp = () => ( // Currently picked link
    <Box
      sx={{
        color: "text.tertiary",
        fontSize: "1.7rem",
        width: "52px",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // because this is the currently selected path
        boxShadow: `${palette.primary.main} 0px -2px 0px inset`
      }}
    >
      {children}
    </Box>
  )

  const Np = () => ( // Not picked link
    <Box
      component={RouterLink}
      to={path}
      sx={{
        color: "text.tertiary",
        fontSize: "1.7rem",
        width: "52px",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // the rest of the paths
        "&:hover": {
          color: "primary.main",
          boxShadow: `${palette.primary.main} 0px -2px 0px inset`
        }
      }}
    >
      {children}
    </Box>
  )

  if (pathname === "/") {
    if (path === "/chat") {
      return <Cp />
    } else {
      return <Np />
    }
  } else {
    if (RegExp(`^${path}`).test(pathname)) {
      return <Cp />
    } else {
      return <Np />
    }
  }
}
