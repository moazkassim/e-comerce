import { Link } from "react-router-dom";
import Logo from "../../../public/Navbar-img/Logo.png";
import NanMenu from "../Menu/NavMenu";
import DropDownMenu from "../DropDownMenu";
import { ShoppingCart, Search, User } from "lucide-react";

export default function Navbar(props) {
  function handleChange(e) {
    props.setSearchedProduct(e.target.value);
  }
  return (
    <nav className="relative z-50 flex items-center justify-center border-b-[0.5px] border-solid border-black border-opacity-30 bg-white">
      <div className="flex w-full flex-col items-center justify-center lg:mx-8">
        <div className="m:m-0 relative flex w-full flex-1 items-center justify-center">
          <Link
            className="m:m-0 flex h-2 w-full items-center justify-start text-2xl font-bold"
            to="/"
          >
            <img
              src={Logo}
              className="h-[60px] w-[60px]"
              alt="logo-image"
              aria-label="Home-page"
            />
          </Link>
          <div className="hidden w-full items-center justify-center md:flex">
            <input
              type="search"
              className="text-surface focus:border-primary focus:shadow-inset dark:bg-body-dark dark:autofill:shadow-autofill dark:placeholder:text-neutral-300 relative m-0 block w-[1px] min-w-0 flex-auto rounded border border-solid border-gray-700 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal transition duration-300 ease-in-out focus:text-gray-700 focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-white"
              placeholder="Search for products"
              aria-label="Search"
              onChange={handleChange}
            />

            <span className="flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal dark:text-white [&>svg]:w-5">
              <Search className="text-gray-600" />
            </span>
          </div>
          <ul className="top-0 flex w-full items-center justify-end">
            <li className="hidden sm:flex lg:hidden">
              <DropDownMenu
                setCategoryNameTitle={props.setCategoryNameTitle}
                category={props.category}
              />
            </li>
            <li className="hidden sm:flex">
              <Link
                className="transition-duration: 500ms max-sm:hidden relative flex h-16 items-center justify-center overflow-hidden px-6 text-lg text-black hover:text-[#ee50ff]"
                to="/"
                aria-label="Home-page"
              >
                Home
              </Link>
            </li>
            <li className="hidden sm:flex">
              <Link
                className="transition-duration: 500ms max-sm:hidden relative flex h-16 items-center justify-center overflow-hidden px-6 text-lg text-black hover:text-[#ee50ff]"
                to="/contact"
                aria-label="contact-page"
              >
                Contact
              </Link>
            </li>
            <li className="hidden sm:flex">
              <Link
                to="/about"
                aria-label="about-page"
                className="transition-duration: 500ms max-sm:hidden relative flex h-16 items-center justify-center overflow-hidden px-6 text-lg text-black hover:text-[#ee50ff]"
                to="/about"
              >
                About
              </Link>
            </li>
            <li className="cart-icon relative mx-3 cursor-pointer">
              <span className="product-span count absolute top-1 z-10 block h-4 w-4 translate-x-0 translate-y-2 rounded-full bg-[#ee50ff] text-center text-xs leading-4 text-white">
                {props.cartSize}
              </span>
              <i
                className="relative flex h-16 items-center justify-center overflow-hidden text-lg text-black"
                to=""
              >
                <ShoppingCart
                  className="hover:text-[#ee50ff]"
                  onClick={() => props.setVisible((prev) => !prev)}
                />
              </i>
            </li>
            <li className="">
              <Link
                aria-label="login-page"
                className="relative mx-3 flex h-16 items-center justify-center overflow-hidden text-lg hover:text-[#ee50ff]"
                to="/login"
              >
                <User />
              </Link>
            </li>
            <li className="flex sm:hidden">
              <NanMenu
                setCategoryNameTitle={props.setCategoryNameTitle}
                category={props.category}
              />
            </li>
          </ul>
        </div>
        <div className="flex w-full items-center justify-center md:hidden">
          <input
            type="search"
            className="text-surface focus:border-primary focus:shadow-inset dark:bg-body-dark dark:autofill:shadow-autofill dark:placeholder:text-neutral-300 relative mx-2 my-2 block w-[1px] min-w-0 flex-auto rounded border border-solid border-gray-700 bg-transparent bg-clip-padding px-2 py-1.5 text-base font-normal transition duration-300 ease-in-out focus:text-gray-700 focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-white"
            placeholder="Search for products"
            aria-label="Search"
            // aria-describedby="button-addon2"
            onChange={handleChange}
          />

          <span
            className="flex items-center whitespace-nowrap rounded py-1.5 text-center text-base font-normal dark:text-white [&>svg]:w-5"
            id="basic-addon2"
          >
            <Search className="text-gray-600" />
          </span>
        </div>
      </div>
    </nav>
  );
}
