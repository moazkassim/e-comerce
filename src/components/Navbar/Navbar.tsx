import { Link } from "react-router-dom";
import Logo from "../../../public/Navbar-img/Logo.png";
import NanMenu from "../Menu/NavMenu";
import SearchBar from "../SearchBar";
import { ShoppingCart, User } from "lucide-react";
import Cart from "../Cart/Cart";
import { useAppStore } from "../store";

import { useState } from "react";

const CartCounter = () => {
  const cartProducts = useAppStore((state) => state.cartProducts);
  return (
    <span className="absolute right-[-2px] top-[-2px] flex h-4 w-4 items-center justify-center rounded-full bg-[#DB4444] text-sm text-white">
      {cartProducts.length}
    </span>
  );
};
const CartViewer = () => {
  const [cartVisible, setCartVisible] = useState(false);
  function toggleCartVisible() {
    setCartVisible((prev) => !prev);
  }
  return (
    <>
      <Cart cartVisible={cartVisible} />
      <button
        className="relative flex cursor-pointer items-center justify-center p-1"
        onClick={toggleCartVisible}
      >
        <CartCounter />

        <ShoppingCart className="hover:text-[#DB4444]" />
      </button>
    </>
  );
};

export default function Navbar() {
  console.log("iam from navbar");

  return (
    <nav className="relative flex w-full justify-center border-b border-[#7D8184] py-2">
      <div className="container flex w-full flex-col items-center justify-center">
        <div className="flex w-full items-center justify-between gap-10">
          <Link to="/">
            <img
              src={Logo}
              className="w-[84px]"
              alt="logo-image"
              aria-label="Home-page"
            />
          </Link>
          <div className="hidden w-full md:block">
            <SearchBar />
          </div>

          <ul className="hidden gap-10 lg:flex">
            <li className="">
              <Link
                className="max-sm:hidden text-lg hover:text-[#DB4444]"
                to="/"
                aria-label="Home-page"
              >
                Home
              </Link>
            </li>
            <li className="">
              <Link
                className="max-sm:hidden text-lg hover:text-[#DB4444]"
                to="/contact"
                aria-label="contact-page"
              >
                Contact
              </Link>
            </li>
            <li className="">
              <Link
                aria-label="about-page"
                className="max-sm:hidden text-lg hover:text-[#DB4444]"
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>

          <div className="flex items-center justify-center gap-8">
            <CartViewer />

            <Link
              aria-label="login-page"
              to="/login"
              className="cursor-pointer"
            >
              <User
                color="white"
                className="rounded-full bg-[#DB4444] p-1"
                size={30}
              />
            </Link>

            <div className="flex justify-center lg:hidden">
              <NanMenu />
            </div>
          </div>
        </div>
        <div className="w-full md:hidden">
          <SearchBar />
        </div>
      </div>
    </nav>
  );
}
