import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import GoToTop from "./components/GoToTop";
import { ToastContainer } from "react-toastify";
import Router from "./components/Router/Router.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {
  Box,
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import { useShallow } from "zustand/shallow";
import { useAppStore } from "./stores/app-store";

function App() {
  const queryClient = new QueryClient();
  const { darkMode } = useAppStore(
    useShallow((state) => ({
      darkMode: state.darkMode,
    })),
  );
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
  const theme = createTheme(FinalTheme);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <>
          <Navbar />
          <ToastContainer
            position="bottom-right"
            autoClose={2000}
            hideProgressBar={false}
            closeOnClick={true}
            pauseOnHover={false}
            draggable={true}
            progressStyle={undefined}
            theme={darkMode ? "dark" : "light"}
          />
          <GoToTop />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Container maxWidth={false}>
              <Router />
            </Container>
          </Box>

          <Footer />
        </>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
