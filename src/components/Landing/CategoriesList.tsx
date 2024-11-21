import CategoryLink from "./CategoryLink";
import { useEffect } from "react";
import { useShallow } from "zustand/react/shallow";
import axios from "axios";
import { Category as ICategory, useAppStore } from "../../stores/app-store";
import { useFetch } from "../CustomHooks/useFetch";
export default function CategoriesList() {
  const { categories, setCategories, setSelectedCategory } = useAppStore(
    useShallow((state) => ({
      setSelectedCategory: state.setSelectedCategory,
      categories: state.categories,
      setCategories: state.setCategories,
    })),
  );

  const { data, error, isLoading } = useFetch<ICategory[]>(
    "https://fakestoreapi.com/products/categories",
  );

  useEffect(() => {
    if (data && data.length > 0) {
      setCategories(data);
      const result = data[0];
      setSelectedCategory(result);
    }
  }, [data]);

  // useEffect(() => {
  //   axios
  //     .get<Category[]>("https://fakestoreapi.com/products/categories")
  //     .then((res) => {
  //       const result = res.data;
  //       setCategories(result);

  //       setSelectedCategory(result[0]);
  //     })
  //     .catch(function (error) {
  //       // handle error
  //       console.log(error);
  //     });
  // }, [setCategories]);
  return (
    <ul className="hidden w-48 flex-col gap-4 ease-linear lg:inline-flex">
      {categories.map((cate: string) => {
        return <CategoryLink key={cate} cate={cate} />;
      })}
    </ul>
  );
}
