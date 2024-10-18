import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import GoToTop from "./components/GoToTop";
import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import Router from "./components/Router/Router";

function App() {
  const [cartProducts, setCartProducts] = useState([]);
  const [searchedProduct, setSearchedProduct] = useState("");
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("electronics");

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

      <Navbar
        cartProducts={cartProducts}
        setSearchedProduct={setSearchedProduct}
        searchedProduct={searchedProduct}
        category={category}
        setSelectedCategory={setSelectedCategory}
        setCartProducts={setCartProducts}
      />
      <GoToTop />
      <div className="flex w-full items-center justify-center">
        <div className="md:container">
          <Router
            setCartProducts={setCartProducts}
            searchedProduct={searchedProduct}
            category={category}
            setSelectedCategory={setSelectedCategory}
            selectedCategory={selectedCategory}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
