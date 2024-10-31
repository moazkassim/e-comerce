import { useState, createContext } from "react";
export const SearchedProductContext = createContext("");

export default function SearchedProductContextProvider(props) {
  ("hi i am from search context");

  const value = {};
  return (
    <SearchedProductContext.Provider value={value}>
      {props.children}
    </SearchedProductContext.Provider>
  );
}
