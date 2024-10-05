import { Link } from "react-router-dom";
import Logo from "../../../public/Navbar-img/Logo.png";
import NanMenu from "../Menu/NavMenu";
import DropDownMenu from "../DropDownMenu";
import SearchBar from "../SearchBar";
import { ShoppingCart, User } from "lucide-react";

export default function Navbar(props) {
  return (
    <nav className="flex w-full items-center justify-center border-b-[0.5px] border-solid border-black border-opacity-30 bg-white py-2">
      <div className="md:flex-ro flex w-full flex-col items-center justify-center lg:mx-8">
        <div className="flex w-full items-center justify-between md:justify-center">
          <Link className="" to="/">
            <img
              src={Logo}
              className="w-[84px]"
              alt="logo-image"
              aria-label="Home-page"
            />
          </Link>
          <div className="mr-3 hidden w-full md:block">
            <SearchBar
              setSearchedProduct={props.setSearchedProduct}
              searchedProduct={props.searchedProduct}
            />
          </div>

          <ul className="flex gap-12">
            <li className="hidden sm:flex lg:hidden">
              <DropDownMenu
                setCategoryNameTitle={props.setCategoryNameTitle}
                category={props.category}
              />
            </li>
            <li className="hidden sm:flex">
              <Link
                className="max-sm:hidden text-lg hover:text-[#DB4444]"
                to="/"
                aria-label="Home-page"
              >
                Home
              </Link>
            </li>
            <li className="hidden sm:flex">
              <Link
                className="max-sm:hidden text-lg hover:text-[#DB4444]"
                to="/contact"
                aria-label="contact-page"
              >
                Contact
              </Link>
            </li>
            <li className="hidden sm:flex">
              <Link
                aria-label="about-page"
                className="max-sm:hidden text-lg hover:text-[#DB4444]"
                to="/about"
              >
                About
              </Link>
            </li>

            <li className="relative flex cursor-pointer items-center justify-center">
              <span className="absolute right-[-2px] top-[-5px] h-4 w-4 rounded-full bg-[#DB4444] text-center text-[13px] leading-4 text-white">
                {props.cartSize}
              </span>

              <ShoppingCart
                className="hover:text-[#DB4444]"
                onClick={() => props.setVisible((prev) => !prev)}
              />
            </li>
            <li className="">
              <Link aria-label="login-page" to="/login">
                <User
                  color="white"
                  className="rounded-full bg-[#DB4444] p-1"
                  size={30}
                />
              </Link>
            </li>
            <li className="flex items-center justify-center sm:hidden">
              <NanMenu
                setCategoryNameTitle={props.setCategoryNameTitle}
                category={props.category}
              />
            </li>
          </ul>
        </div>
        <div className="w-full md:hidden">
          <SearchBar setSearchedProduct={props.setSearchedProduct} />
        </div>
      </div>
    </nav>
  );
}
