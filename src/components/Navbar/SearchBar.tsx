import { Search, CircleX } from "lucide-react";

import { useAppStore } from "../../stores/app-store";
import { useShallow } from "zustand/shallow";

export default function SearchBar() {
  const { searchedProduct, setSearchedProduct, clearSearchedProduct } =
    useAppStore(
      useShallow((state) => ({
        searchedProduct: state.searchedProduct,
        setSearchedProduct: state.setSearchedProduct,
        clearSearchedProduct: state.clearSearchedProduct,
      })),
    );

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchedProduct(e.target.value);

  }
  function handelSearchButton() {
    clearSearchedProduct();
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
