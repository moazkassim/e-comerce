import { useContext, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SearchedProductContext } from "../SearchedProductContext";
export default function Cart() {
  ("hi i am from cart");
  const { cartProducts, setCartProducts, cartVisible } = useContext(
    SearchedProductContext,
  );

  useEffect(() => {
    if (localStorage.getItem("cartArray"))
      setCartProducts(JSON.parse(localStorage.getItem("cartArray")));
  }, [setCartProducts]);

  if (!cartVisible) {
    return null;
  }

  return (
    <section className="absolute right-0 top-14 z-50 block max-w-96 flex-col rounded bg-[#F5F7F8] shadow-xl delay-700">
      {cartProducts.map((product, index) => {
        return (
          <div
            key={index}
            className="relative z-40 flex w-full min-w-96 flex-row items-center overflow-hidden border-b-2 border-solid"
          >
            <div className="border-r-[1px] border-solid p-2">
              <img
                className="h-[95px] w-[85px] object-scale-down"
                src={product.image}
                alt="cart-image"
              />
            </div>
            <div className="items-between flex w-full flex-col justify-center p-4">
              <div className="flex flex-row items-start justify-between">
                <div className="flex flex-col items-start justify-between gap-2">
                  <h1 className="text-md font-medium opacity-80">
                    {product.title.split(" ").slice(0, 2).join(" ")}
                  </h1>
                  <p className="text-sm opacity-60">Salmon</p>
                </div>
                <span className="font-semibold">${product.price}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs">Qty 1</span>
                <button
                  name="remove-button"
                  onClick={() => {
                    setCartProducts((prev) => {
                      let testArr = prev.filter((_, i) => i !== index);
                      localStorage.setItem(
                        "cartArray",
                        JSON.stringify(testArr),
                      );
                      return testArr;
                    });

                    toast.success("Item removed");
                  }}
                  className="bg-transparent text-sm font-medium text-[#FA3434]"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
