import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import About from "./components/about/About";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import NoMatch from "./components/NoMatch";
import Footer from "./components/Footer/Footer";
import GoToTop from "./components/GoToTop";
import { useState, useEffect } from "react";
import Cart from "./components/Cart/Cart";

function App() {
  const [categoryNameTitle, setCategoryNameTitle] = useState("electronics");
  const [cartProducts, setCartProducts] = useState([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("cartArray"))
      setCartProducts(JSON.parse(localStorage.getItem("cartArray")));
    console.log(
      "cart propducts after pooling from local storage",
      cartProducts.length
    );
  }, []);
  return (
    <>
      <Navbar cartSize={cartProducts.length} setVisible={setVisible} />
      <GoToTop />
      <Cart
        setCartProducts={setCartProducts}
        cartProducts={cartProducts}
        cartVisible={visible}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              categoryNameTitle={categoryNameTitle}
              setCategoryNameTitle={setCategoryNameTitle}
              setCartProducts={setCartProducts}
              cartProducts={cartProducts}
            />
          }
        ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
