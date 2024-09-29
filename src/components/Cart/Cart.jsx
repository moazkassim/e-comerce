import { MapPinned } from "lucide-react";
import React from "react";

export default function Cart(props) {
  return (
    <section
      className={`border-slate-100 right-6 z-50 mt-7 max-w-96 flex-col rounded border-2 border-solid bg-white p-1 shadow-xl delay-700 ${
        props.cartVisible ? "absolute" : "hidden"
      }`}
    >
      {props.cartProducts.map((product, index) => {
        return (
          <div
            key={index}
            className="relative z-40 my-1 flex flex-row items-center gap-14 border-2 border-solid bg-[#F5F7F8] p-3"
          >
            <div className="border-2 border-solid p-2">
              <img
                className="h-[115px] w-[105px] object-scale-down"
                src={product.image}
                alt=""
              />
            </div>
            <div className="flex flex-col items-center justify-between">
              <p className="text-base font-normal text-[#505050]">
                {product.title.slice(0, 35)}
              </p>
              <span className="bold mb-2 mt-2 text-base font-semibold text-[#333]">
                {product.price} $
              </span>
              <div className="buttons flex flex-row">
                <button className="confirm-btn mr-3 rounded border-2 border-solid bg-white p-[6px] text-sm font-medium text-[#0D6EFD]">
                  Confirm
                </button>
                <button
                  onClick={() => {
                    let testArr = [];
                    testArr = props.cartProducts.filter((_, i) => i !== index);

                    props.setCartProducts(testArr);
                    // );
                    console.log("after removing", testArr);
                    localStorage.setItem("cartArray", JSON.stringify(testArr));
                  }}
                  className=" rounded border-2 border-solid bg-white p-[6px] text-sm font-medium text-[#FA3434]"
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
