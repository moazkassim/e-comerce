import {
  Routes,
  Route,
  createBrowserRouter,
  Link,
  Outlet,
  Navigate,
} from "react-router-dom";
import Home from "../Home/Home";
import About from "../about/About";
import Contact from "../Contact/Contact";
import Login from "../Login/Login";
import Register from "../Register/Register";
import NoMatch from "../NoMatch";
import Checkout from "../Checkout/Checkout";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
// export default function Router() {
//   console.log("iam from router");

//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<Home />}></Route>
//         <Route path="/about" element={<About />}></Route>
//         <Route path="/contact" element={<Contact />}></Route>
//         <Route path="/login" element={<Login />}></Route>
//         <Route path="/register" element={<Register />}></Route>
//         <Route path="/checkout" element={<Checkout />}></Route>
//         <Route path="*" element={<NoMatch />} />
//       </Routes>
//     </>
//   );
// }
const Root = () => {
  return (
    <>
      <Navbar />
      <div className="flex w-full items-center justify-center">
        <div className="md:container">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

const AuthRoot = () => {
  const isAuthenticated = true;
  if (isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <Navbar />
      <div className="flex w-full items-center justify-center">
        <div className="md:container">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path: "/login",
    element: <AuthRoot />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
// export default router;
// export { router };
