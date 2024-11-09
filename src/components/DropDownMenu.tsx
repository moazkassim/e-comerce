import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";

import { Link } from "react-router-dom";
import { useShallow } from "zustand/shallow";
import { useAppStore } from "./store";

export default function DropDownMenu() {
  console.log("hi i am from drop down menu");
  const { categories, setSelectedCategory } = useAppStore(
    useShallow((state) => ({
      setSelectedCategory: state.setSelectedCategory,
      categories: state.categories,
    })),
  );

  return (
    <Menu>
      <MenuHandler>
        <button
          name="categories-name"
          className="border-none bg-white px-3 py-0"
        >
          Categories
        </button>
      </MenuHandler>
      <MenuList className="z-50">
        {categories.map((cate: string, index: number) => {
          return (
            <MenuItem key={index}>
              <Link
                to="/"
                aria-label="set-category-name"
                className="hover:[#DB4444] flex items-start text-black md:gap-4"
                onClick={() => {
                  setSelectedCategory(cate);
                }}
              >
                {cate}
              </Link>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}
