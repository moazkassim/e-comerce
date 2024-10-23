import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import GoToTop from "./components/GoToTop";

import { ToastContainer } from "react-toastify";
import Router from "./components/Router/Router";

function App() {
  ("hi i am from App");
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose="2000"
        hideProgressBar="false"
        closeOnClick="true"
        pauseOnHover="false"
        draggable="true"
        progressStyle={undefined}
        theme="light"
      />
      <GoToTop />
      <Navbar />
      <div className="flex w-full items-center justify-center">
        <div className="md:container">
          <Router />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
