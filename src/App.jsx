import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import GoToTop from "./components/GoToTop";

import { ToastContainer } from "react-toastify";
import { router } from "./components/Router/Router.jsx";
import { RouterProvider } from "react-router-dom";
// import { useAppStore } from "./components/store";
// import { useShallow } from "zustand/shallow";
// import { useEffect } from "react";

function App() {
  console.log("hi i am from App");
  // const { hydrateCartProducts } = useAppStore(
  //   useShallow((state) => ({
  //     hydrateCartProducts: state.hydrateCartProducts,
  //   })),
  // );
  // useEffect(() => {
  //   hydrateCartProducts();
  // }, [hydrateCartProducts]);

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
      <RouterProvider router={router} />,
    </>
  );
}

export default App;
