import React from "react";
import { Search, CircleX } from "lucide-react";

export default function SearchBar(props) {
  function handleChange(e) {
    props.setSearchedProduct(e.target.value);
  }
  function handelSearchButton() {
    props.setSearchedProduct("");
  }
  return (
    <div className="flex w-full items-center justify-center rounded border bg-[#F5F5F5] focus-within:border-black">
      <input
        className="w-full bg-transparent px-3 py-2 focus:outline-none"
        placeholder="Search for products"
        aria-label="Search"
        onChange={handleChange}
        value={props.searchedProduct}
        type="search"
      />
      {props.searchedProduct ? (
        <button className="px-3" onClick={handelSearchButton}>
          <CircleX className="" />
        </button>
      ) : (
        <div className="px-3">
          <Search />
        </div>
      )}
    </div>
  );
}
