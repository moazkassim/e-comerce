import { useState, createContext } from "react";
export const SearchedProductContext = createContext("");

export default function SearchedProductContextProvider(props) {
  ("hi i am from search context");
  const [searchedProduct, setSearchedProduct] = useState("");
  const [category, setCategory] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("electronics");
  const [cartVisible, setCartVisible] = useState(false);
  const value = {
    searchedProduct,
    setSearchedProduct,
    category,
    setCategory,
    cartProducts,
    setCartProducts,
    selectedCategory,
    setSelectedCategory,
    cartVisible,
    setCartVisible,
  };
  return (
    <SearchedProductContext.Provider value={value}>
      {props.children}
    </SearchedProductContext.Provider>
  );
}
