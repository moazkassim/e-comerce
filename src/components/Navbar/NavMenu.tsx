import { ChevronUpIcon } from "@heroicons/react/24/solid";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { AlignJustify } from "lucide-react";
import { Link } from "react-router-dom";
import { useShallow } from "zustand/shallow";
import { useAppStore } from "../../stores/app-store";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getCategories } from "../../services/api/categories";

const CategoryList = () => {
  const { setSelectedCategory } = useAppStore(
    useShallow((state) => ({
      setSelectedCategory: state.setSelectedCategory,
    })),
  );

  const { isPending, error, data } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });
  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      {data?.map((category, index) => {
        return (
          <MenuItem key={index}>
            <Link
              to="/"
              aria-label="set-category-name-title"
              className="flex items-start text-black hover:text-red-500 md:gap-4"
              onClick={() => {
                setSelectedCategory(category);
              }}
            >
              {category}
            </Link>
          </MenuItem>
        );
      })}
    </>
  );
};
export default function NanMenu() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <Menu>
      <MenuHandler>
        <button name="menu-button" className="2 border-none bg-white py-0">
          <AlignJustify color="black" />
        </button>
      </MenuHandler>
      <MenuList>
        <MenuItem>
          <Link aria-label="Home-page" to="/">
            Home
          </Link>
        </MenuItem>
        <MenuItem>
          <Link aria-label="about-page" to="/about">
            About
          </Link>
        </MenuItem>
        <MenuItem>
          <Link aria-label="contact-page" className="flex-1" to="/contact">
            Contact
          </Link>
        </MenuItem>

        <Menu
          placement="right-start"
          open={openMenu}
          handler={setOpenMenu}
          allowHover
          offset={15}
        >
          <MenuHandler className="flex items-center justify-between">
            <MenuItem>
              Categories
              <ChevronUpIcon
                strokeWidth={2.5}
                className={`h-3.5 w-3.5 transition-transform ${
                  openMenu ? "rotate-90" : ""
                }`}
              />
            </MenuItem>
          </MenuHandler>

          <MenuList className="z-50">
            <CategoryList />
          </MenuList>
        </Menu>
      </MenuList>
    </Menu>
  );
}
