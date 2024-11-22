import axios from "axios";
import { Product } from "../../stores/app-store";
export type Category = string;

export const getProducts = async (
  selectedCategory: String,
  selectedFilter: String,
  searchedProduct: String = "",
) => {
  const res = await axios.get<Product[]>(
    searchedProduct
      ? "https://fakestoreapi.com/products/"
      : `https://fakestoreapi.com/products/category/${selectedCategory}?sort=${selectedFilter}`,
  );
  const filteredData = res.data.filter((ele) =>
    ele.title.toLowerCase().includes(searchedProduct.toLowerCase()),
  );
  console.log("iam from searched filter if exist", filteredData);

  return filteredData;
};
