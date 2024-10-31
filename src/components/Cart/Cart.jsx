import "react-toastify/dist/ReactToastify.css";

import { useAppStore } from "../store";
import { useShallow } from "zustand/shallow";

import CartProduct from "./CartProduct";
export default function Cart() {
  ("hi i am from cart");

  const { cartVisible, cartProducts } = useAppStore(
    useShallow((state) => ({
      cartProducts: state.cartProducts,
      cartVisible: state.cartVisible,
    })),
  );

  if (!cartVisible) {
    return null;
  }
  console.log("cart products", cartProducts);
  return (
    <section className="absolute right-5 top-20 z-50 block max-w-96 flex-col rounded bg-[#F5F7F8] shadow-xl delay-700">
      {cartProducts.length > 0 ? (
        cartProducts.map((product,index) => {
          return <CartProduct key={index} product={product} />;
        })
      ) : (
        <div className="bg-[#F5F7F8 z-40 flex h-12 w-full min-w-96 items-center justify-center shadow-lg">
          <h1 className="text-center text-lg text-[#FA3434]">
            Your Cart is empty
          </h1>
        </div>
      )}
    </section>
  );
}
