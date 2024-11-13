import CategoryLink from "./CategoryLink";
import { useEffect } from "react";
import { useShallow } from "zustand/react/shallow";

import axios from "axios";
import { Category, useAppStore } from "../../stores/app-store";
export default function CategoriesList() {
  console.log("iam from category list");
  const { categories, setCategories, setSelectedCategory } = useAppStore(
    useShallow((state) => ({
      setSelectedCategory: state.setSelectedCategory,
      categories: state.categories,
      setCategories: state.setCategories,
    })),
  );

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((res) => {
        const result = res.data as Category[];
        setCategories(result);

        setSelectedCategory(result[0]);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [setCategories]);
  return (
    <ul className="hidden w-48 flex-col gap-4 ease-linear lg:inline-flex">
      {categories.map((cate: string) => {
        return <CategoryLink key={cate} cate={cate} />;
      })}
    </ul>
  );
}
