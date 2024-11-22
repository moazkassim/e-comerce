import axios from "axios";
export type Category = string;
export const getCategories = async () => {
  const res = await axios.get<Category[]>(
    "https://fakestoreapi.com/products/categories",
  );
  return res.data;
};
