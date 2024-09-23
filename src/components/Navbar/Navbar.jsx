import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../public/Navbar-img/Logo.png";

import { ShoppingCart, Search, User } from "lucide-react";

export default function Navbar(props) {
  function handleChange(e) {
    props.setSearchedProduct(e.target.value);
  }
  return (
    <nav
      className="z-50 flex justify-center h-[73px] bg-white relative border-solid border-black border-b-[0.5px] border-opacity-30 
      "
    >
      <div className="container flex justify-between text-center relative items-center w-[1200px] max-lg:w-[1600px] max-sm:w-fit max-sm:gap-2">
        <Link
          className="text-2xl font-bold h-2 flex justify-center items-center max-sm:mb-4"
          to="/"
        >
          <img src={Logo} className="w-[145px] h-[70px]" />
        </Link>
        <div className="ms-5 flex w-[30%] items-center justify-between">
          <input
            type="search"
            className="relative m-0 block w-[1px] min-w-0 flex-auto rounded border border-solid border-gray-700  bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-surface transition duration-300 ease-in-out focus:border-primary focus:text-gray-700 focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:bg-body-dark dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill"
            placeholder="Search for products"
            aria-label="Search"
            aria-describedby="button-addon2"
            onChange={handleChange}
          />

          <span
            className="flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal dark:text-white [&>svg]:w-5"
            id="basic-addon2"
          >
            <Search className="text-gray-600 " />
          </span>
        </div>
        <ul className="nav flex max-sm:gap-1 max-sm:items-end">
          <li>
            <Link
              className="max-sm:hidden transition-duration: 500ms hover:text-[#ee50ff] flex justify-center px-6 items-center h-16 relative text-black overflow-hidden text-lg"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="max-sm:hidden transition-duration: 500ms hover:text-[#ee50ff] flex justify-center px-6 items-center h-16 relative text-black overflow-hidden text-lg"
              to="/contact"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              className="max-sm:hidden transition-duration: 500ms hover:text-[#ee50ff] flex justify-center px-6 items-center h-16 relative text-black overflow-hidden text-lg"
              to="/about"
            >
              About
            </Link>
          </li>
          <li></li>
          <li className="relative cursor-pointer cart-icon">
            <span className="product-span translate-y-2 rounded-full count absolute top-1 right-8 bg-[#ee50ff] w-4 h-4 leading-4 block text-center translate-x-0 text-xs z-10 text-white">
              {props.cartSize}
            </span>
            <i
              className="flex justify-center pr-10 items-center h-16 relative text-black overflow-hidden text-lg"
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
              className="flex justify-center items-center h-16 relative overflow-hidden text-lg hover:text-[#ee50ff]"
              to="./login"
            >
              <User />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
