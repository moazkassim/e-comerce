import { useAppStore } from "../../stores/app-store";
import { useShallow } from "zustand/shallow";
import SearchIcon from "@mui/icons-material/Search";
import CancelIcon from "@mui/icons-material/Cancel";
import * as React from "react";
import { IconButton, Input } from "@mui/material";
export default function InputAdornments() {
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
    <Input
      color="secondary"
      sx={{
        width: "100%",
        borderRadius: "0.25rem",
        padding: "5px",
      }}
      type="text"
      value={searchedProduct}
      onChange={handleChange}
      endAdornment={
        <IconButton
          size="small"
          aria-label="search"
          onClick={handelSearchButton}
        >
          {searchedProduct ? (
            <CancelIcon fontSize="small" />
          ) : (
            <SearchIcon fontSize="small" />
          )}
        </IconButton>
      }
    />
  );
}
