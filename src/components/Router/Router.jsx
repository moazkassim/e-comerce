import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import About from "../about/About";
import Contact from "../Contact/Contact";
import Login from "../Login/Login";
import Register from "../Register/Register";
import NoMatch from "../NoMatch";
export default function Router(props) {
  const {
    setCartProducts,
    cartProducts,
    searchedProduct,
    category,
    setSelectedCategory,
    selectedCategory,
  } = props;
  return (
    <>
      {" "}
      <Routes>
        <Route
          path="/"
          element={
            <Home
              setCartProducts={setCartProducts}
              cartProducts={cartProducts}
              searchedProduct={searchedProduct}
              category={category}
              setSelectedCategory={setSelectedCategory}
              selectedCategory={selectedCategory}
            />
          }
        ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}
