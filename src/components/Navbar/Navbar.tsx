import { Link } from "react-router-dom";
import Logo from "../../../public/Navbar-img/Logo.png";
import NanMenu from "./NavMenu";
import SearchBar from "./SearchBar";
import { LogOut, ShoppingCart, User } from "lucide-react";
import Cart from "../Cart/Cart";
import { useAppStore } from "../../stores/app-store";

import { useState } from "react";
import { useShallow } from "zustand/shallow";

const CartCounter = () => {
  const cartProducts = useAppStore((state) => state.cartProducts);
  return (
    <span className="absolute right-[-2px] top-[-2px] flex h-4 w-4 items-center justify-center rounded-full bg-[#DB4444] text-sm text-white">
      {cartProducts.length}
    </span>
  );
};
const CartViewer = () => {
  const [cartVisible, setCartVisible] = useState<boolean>(false);
  function toggleCartVisible() {
    setCartVisible((prev) => !prev);
  }
  return (
    <>
      <Cart cartVisible={cartVisible} setCartVisible={setCartVisible} />
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

  const { userToken, logOut } = useAppStore(
    useShallow((state) => ({
      userToken: state.userToken,
      logOut: state.logOut,
    })),
  );

  return (
    <nav className="relative flex w-full justify-center border-b border-[#7D8184] py-2 md:h-[70px]">
      <div className="container flex w-full flex-col items-center justify-center">
        <div className="flex w-screen items-center justify-between gap-10 px-1 md:w-full md:px-0">
          <Link to="/">
            <img
              src={Logo}
              className="max-w-[65px]"
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
            {" "}
            <CartViewer />
            {userToken == null ? (
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
            ) : (
              <>
                <LogOut
                  onClick={() => logOut()}
                  color="white"
                  className="cursor-pointer rounded-full bg-[#DB4444] p-1"
                  size={30}
                />
              </>
            )}
            <div className="flex justify-center lg:hidden">
              <NanMenu />
            </div>
          </div>
        </div>
        <div className="w-screen px-1 md:hidden">
          <SearchBar />
        </div>
      </div>
    </nav>
  );
}
