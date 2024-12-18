import { createTheme } from "@mui/material";

let darkMode = true;

export const theme = createTheme({
  palette: {
    mode: darkMode ? "dark" : "light",
    //   common: { black: "#000", white: "#fff" },
    //   primary: {
    //     main: "#1976d2",
    //     light: "#42a5f5",
    //     dark: "#1565c0",
    //     contrastText: "#fff",
    //   },
    //   secondary: {
    //     main: "#9c27b0",
    //     light: "#ba68c8",
    //     dark: "#7b1fa2",
    //   },
    // },
  },
  typography: {
    htmlFontSize: 16,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    h1: { fontSize: "3rem", fontWeight: "600" },
    h2: { fontSize: "1.75rem", fontWeight: "600" },
    h3: { fontSize: "1.5rem", fontWeight: "600" },
  },
});
