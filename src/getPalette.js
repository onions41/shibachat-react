import { deepOrange, purple } from "@mui/material/colors"

// Not used anywhere yet. Would be needed later when setting
// up dark theme
export default function getPalette(mode) {
  return {
    palette: {
      mode,
      ...(mode === "light"
        ? {
            // palette values for light mode
            primary: {
              main: deepOrange[700]
            }
          }
        : {
            // palette values for dark mode
            primary: {
              main: purple[700]
            }
          })
    }
  }
}
