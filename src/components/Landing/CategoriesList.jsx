import CategoryLink from "./CategoryLink";
import { useEffect } from "react";
import { useShallow } from "zustand/react/shallow";

import axios from "axios";
import { useAppStore } from "../store";
export default function CategoriesList() {
  const { categories, setCategories, setSelectedCategory } = useAppStore(
    useShallow((state) => ({
      setSelectedCategory: state.setSelectedCategory,
      categories: state.categories,
      setCategories: state.setCategories,
    })),
  );

  useEffect(() => {
    console.log("we getting categories");
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((res) => {
        const result = res.data;
        setCategories(result);
        console.log(res.data[0], "first cate");
        setSelectedCategory(result[0]);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [setCategories]);
  return (
    <ul className="hidden w-48 flex-col gap-4 ease-linear lg:inline-flex">
      {categories.map((cate) => {
        return <CategoryLink key={cate} cate={cate} />;
      })}
    </ul>
  );
}
