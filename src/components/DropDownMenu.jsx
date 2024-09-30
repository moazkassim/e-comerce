import { useNavigate } from "react-router-dom";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";

import { Link } from "react-router-dom";

export default function DropDownMenu(props) {
  const navigate = useNavigate();
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
        {props.category.map((cate, index) => {
          return (
            <MenuItem key={index}>
              <Link
                to="/"
                aria-label="set-category-name"
                className="hover:[#ee50ff] flex items-start text-black md:gap-4"
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
  );
}
