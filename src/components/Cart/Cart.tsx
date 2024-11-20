import CartProduct from "./CartProduct";

import { useAppStore } from "../../stores/app-store";
import { useNavigate } from "react-router-dom";
import { useShallow } from "zustand/shallow";

interface CartProps {
  cartVisible: boolean;
  setCartVisible: (cartVisible: boolean) => void;
}
export default function Cart(props: CartProps) {
  console.log("hi i am from cart");
  const { cartProducts, userToken } = useAppStore(
    useShallow((state) => ({
      cartProducts: state.cartProducts,
      userToken: state.userToken,
    })),
  );
  const { cartVisible, setCartVisible } = props;
  let navigate = useNavigate();
  if (!cartVisible) {
    return null;
  }

  return (
    <section className="absolute right-5 top-20 z-50 block max-w-96 flex-col rounded bg-[#F5F7F8] shadow-xl delay-700">
      {cartProducts.length > 0 ? (
        <div className="flex flex-col items-center justify-center">
          {cartProducts.map((product, index) => {
            return <CartProduct key={index} product={product} />;
          })}
          <button
            className="my-5 h-[40px] w-[192px] rounded-md bg-[#DB4444] text-base font-medium text-white duration-100 ease-in hover:bg-[#B71F3B]"
            onClick={() => {
              if (userToken) {
                navigate("/checkout");
              } else {
                navigate("/login");
              }
              setCartVisible(false);
            }}
          >
            Checkout
          </button>
        </div>
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
