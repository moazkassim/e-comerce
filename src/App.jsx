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
import axios from "axios";

function App() {
  const [cartProducts, setCartProducts] = useState([]);
  const [visible, setVisible] = useState(false);
  const [searchedProduct, setSearchedProduct] = useState("");
  const [category, setCategory] = useState([]);
  const [categoryNameTitle, setCategoryNameTitle] = useState("electronics");

  useEffect(() => {
    if (localStorage.getItem("cartArray"))
      setCartProducts(JSON.parse(localStorage.getItem("cartArray")));
    
  }, []);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((res) => {
        setCategory(res.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);
  return (
    <>
      <Navbar
        cartSize={cartProducts.length}
        setVisible={setVisible}
        setSearchedProduct={setSearchedProduct}
        category={category}
        setCategoryNameTitle={setCategoryNameTitle}
      />
      <GoToTop />
      <Cart
        setCartProducts={setCartProducts}
        cartProducts={cartProducts}
        cartVisible={visible}
      />
      <div className="lg:mx-8">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                setCartProducts={setCartProducts}
                cartProducts={cartProducts}
                searchedProduct={searchedProduct}
                category={category}
                setCategoryNameTitle={setCategoryNameTitle}
                categoryNameTitle={categoryNameTitle}
              />
            }
          ></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
