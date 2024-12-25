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
import { Box, Paper, Skeleton } from "@mui/material";

export default function CategoriesList() {
  const { setSelectedCategory, setCurrentPage } = useAppStore(
    useShallow((state) => ({
      setSelectedCategory: state.setSelectedCategory,
      setCurrentPage: state.setCurrentPage,
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

  if (isPending || !data)
    return (
      <Box
        sx={{
          display: "flex",
          gap: "10px",
          flexDirection: "column",
          padding: "20px",
        }}
      >
        <Skeleton variant="rectangular" width="260px" height="48px" />
        <Skeleton variant="rectangular" width="260px" height="48px" />
        <Skeleton variant="rectangular" width="260px" height="48px" />
        <Skeleton variant="rectangular" width="260px" height="48px" />
      </Box>
    );
  if (error) return "An error has occurred: " + error.message;

  return (
    <Paper
      elevation={1}
      sx={{
        width: "100%",
        maxWidth: 260,
        display: { xs: "none", lg: "inline-block" },
      }}
    >
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
            <ListItemButton
              onClick={() => {
                setSelectedCategory(cate);
                setCurrentPage(0);
              }}
              key={cate}
            >
              <ListItemText primary={cate} />
              <ListItemIcon>
                <ArrowForwardIosSharpIcon />
              </ListItemIcon>
            </ListItemButton>
          );
        })}
      </List>
    </Paper>
  );
}
