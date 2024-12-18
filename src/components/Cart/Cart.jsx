import CartProduct from "./CartProduct";

import { useAppStore } from "../store";
export default function Cart(props) {
  console.log("hi i am from cart");
  const cartProducts = useAppStore((state) => state.cartProducts);
  const { cartVisible } = props;
  if (!cartVisible) {
    return null;
  }

  return (
    <section className="absolute right-5 top-20 z-50 block max-w-96 flex-col rounded bg-[#F5F7F8] shadow-xl delay-700">
      {cartProducts.length > 0 ? (
        <div>
          {cartProducts.map((product, index) => {
            return <CartProduct key={index} product={product} />;
          })}
          {/* <div>
            <div>
              <p>Subtotal</p>
              <span>$200</span>
            </div>
            <div>
              <p>Shipping Fee</p>
              <span>$20</span>
            </div>
          </div>
          <div>
            <div>
              <p>ToTal</p>

            </div>
          </div> */}
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
