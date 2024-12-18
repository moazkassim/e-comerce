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
import { Container } from "@mui/material";

function App() {
  console.log("hi i am from App");
  const queryClient = new QueryClient();
  return (
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
          theme="light"
        />
        <GoToTop />
        <div className="flex items-center justify-center">
          <Container maxWidth={false}>
            <Router />
          </Container>
        </div>
        <Footer />
      </>
    </QueryClientProvider>
  );
}

export default App;
