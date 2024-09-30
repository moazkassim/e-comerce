import React from "react";

import { ChevronUpIcon } from "@heroicons/react/24/solid";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";  
import { AlignJustify } from "lucide-react";
import { Link } from "react-router-dom";

export default function NanMenu(props) {
  const [openMenu, setOpenMenu] = React.useState(false);

  return (
    <Menu>
      <MenuHandler>
        <button name="menu-button" className="border-none bg-white px-3 py-0">
          <AlignJustify color="black" />
        </button>
      </MenuHandler>
      <MenuList className="">
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
            {props.category.map((cate, index) => {
              return (
                <MenuItem key={index}>
                  <Link
                    to="/"
                    aria-label="set-category-name-title"
                    className="flex items-start text-black hover:text-red-500 md:gap-4"
                    onClick={() => {
                      props.setCategoryNameTitle(cate);
                    }}
                  >
                    {cate}
                  </Link>
                </MenuItem>
              );
            })}
          </MenuList>
        </Menu>
      </MenuList>
    </Menu>
  );
}
