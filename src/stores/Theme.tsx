import { createTheme } from "@mui/material";
export const toggleDarkTheme = () => darkMode == !darkMode;
let darkMode = true;
const darkTheme: {} = {
  palette: {
    mode: "dark",
    common: { black: "#000", white: "#fff" },
    primary: {
      main: "#DB4444",
    },

    secondary: {
      main: "#fff",
    },
  },
};
const lightTheme: {} = {
  palette: {
    mode: "light",
    common: { black: "#000", white: "#fff" },
    primary: {
      main: "#DB4444",
    },

    secondary: {
      main: "#000",
    },
  },
};

let FinalTheme = darkMode ? darkTheme : lightTheme;
export const theme = createTheme(FinalTheme);
