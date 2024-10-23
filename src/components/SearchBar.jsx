import { useContext } from "react";
import { Search, CircleX } from "lucide-react";
import { SearchedProductContext } from "./SearchedProductContext";

export default function SearchBar() {
  ("hi i am from search bar");
  let { searchedProduct, setSearchedProduct } = useContext(
    SearchedProductContext,
  );
  function handleChange(e) {
    setSearchedProduct(e.target.value);
  }
  function handelSearchButton() {
    setSearchedProduct("");
  }
  return (
    <div className="flex w-full items-center justify-center rounded border bg-[#F5F5F5] focus-within:border-black">
      <input
        className="w-full bg-transparent px-3 py-2 focus:outline-none"
        placeholder="Search for products"
        aria-label="Search"
        onChange={handleChange}
        value={searchedProduct}
        type="search"
      />
      {searchedProduct ? (
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
