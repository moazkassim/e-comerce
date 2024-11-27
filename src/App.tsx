import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import GoToTop from "./components/GoToTop";
import { ToastContainer } from "react-toastify";
import Router from "./components/Router/Router.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

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
        <div className="flex w-full items-center justify-center">
          <div className="md:container">
            <Router />
          </div>
        </div>
        <Footer />
        {/* <RouterProvider router={router} />, */}
      </>
    </QueryClientProvider>
  );
}

export default App;
