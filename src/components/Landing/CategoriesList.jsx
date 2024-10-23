import CategoryLink from "./CategoryLink";
import { useContext, useEffect } from "react";
import { SearchedProductContext } from "../SearchedProductContext";
import axios from "axios";
export default function CategoriesList() {
  ("iam from categories list");
  const { category, setCategory } = useContext(SearchedProductContext);
  useEffect(() => {
    ("we getting categories");
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((res) => {
        setCategory(res.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);
  return (
    <ul className="hidden w-48 flex-col gap-4 ease-linear lg:inline-flex">
      {category.map((cate) => {
        return <CategoryLink key={cate} cate={cate} />;
      })}
    </ul>
  );
}
