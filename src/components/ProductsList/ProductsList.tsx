import { useState } from "react";
import Product from "./ProductCard";
import LoadingSpinner from "../LoadingSpinner";
import ErrorViewer from "../ErrorViewer";
import { Product as IProduct, useAppStore } from "../../stores/app-store";
import PaginationButtons from "./PaginationButtons";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useShallow } from "zustand/shallow";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/api/products";
import { Box, Container } from "@mui/material";

export default function ProductsList() {
  const { selectedCategory, searchedProduct } = useAppStore(
    useShallow((state) => ({
      selectedCategory: state.selectedCategory,
      searchedProduct: state.searchedProduct,
    })),
  );
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [selectedFilter, setSelectedFilter] = useState("");
  const { isPending, error, data } = useQuery({
    queryKey: ["products", selectedCategory, selectedFilter, searchedProduct],
    queryFn: () =>
      getProducts(selectedCategory, selectedFilter, searchedProduct),
  });
  const handleSelectChange = (event: SelectChangeEvent<string>): void => {
    setSelectedFilter(event.target.value);
  };
  let pageArr: IProduct[] | null = [];
  pageArr =
    data?.filter(
      (_, index) => index >= 4 * currentPage && index < currentPage * 4 + 4,
    ) || [];
  if (error) {
    return <ErrorViewer errorMessage={error.message} />;
  }
  if (isPending) {
    return (
      <div className="my-20 flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }
  if (data?.length == 0) {
    return <p>there is no products</p>;
  }
  return (
    <Box>
      <Container
        maxWidth={false}
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <FormControl sx={{ width: "400px" }}>
          <InputLabel id="demo-simple-select-label">Sort</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedFilter}
            label="Age"
            onChange={handleSelectChange}
          >
            <MenuItem value={"asc"}>Desc</MenuItem>
            <MenuItem value={"desc"}>Asc</MenuItem>
          </Select>
        </FormControl>

        <Box
          sx={{
            marginBottom: "5rem",
            display: "flex",
            width: "100%",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "3rem",
          }}
        >
          {pageArr.map((product: IProduct) => {
            return <Product key={product.id} product={product} />;
          })}
        </Box>

        <PaginationButtons
          productsNumber={data?.length || 0}
          setCurrentPage={setCurrentPage}
        />
      </Container>
    </Box>
  );
}
