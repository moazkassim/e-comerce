import { useShallow } from "zustand/react/shallow";
import { useAppStore } from "../../stores/app-store";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import {
  getCategories,
  Category as ICategory,
} from "../../services/api/categories";
import * as React from "react";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

export default function CategoriesList() {
  const { setSelectedCategory } = useAppStore(
    useShallow((state) => ({
      setSelectedCategory: state.setSelectedCategory,
    })),
  );

  const { isPending, error, data } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  useEffect(() => {
    if (data) {
      setSelectedCategory(data[0]);
    }
  }, [data]);

  if (isPending || !data) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  // const { data, error, isLoading } = useFetch<ICategory[]>(
  //   "https://fakestoreapi.com/products/categories",
  // );

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
  // return (
  //   <ul className="hidden min-w-48 flex-col gap-4 ease-linear lg:inline-flex">
  //     {data?.map((cate: string) => {
  //       return <CategoryLink key={cate} cate={cate} />;
  //     })}
  //   </ul>
  // );
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 260,

        display: { xs: "none", lg: "inline-block" },
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      {data?.map((cate: string) => {
        return (
          <ListItemButton onClick={() => setSelectedCategory(cate)} key={cate}>
            <ListItemText primary={cate} />
            <ListItemIcon>
              <ArrowForwardIosSharpIcon />
            </ListItemIcon>
          </ListItemButton>
        );
      })}
    </List>
  );
}
