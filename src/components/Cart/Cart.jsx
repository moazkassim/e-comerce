import { MapPinned } from "lucide-react";
import React from "react";

export default function Cart(props) {
  return (
    <section
      className={` delay-700 z-50 border-slate-100 bg-[#F5F7F8]  max-w-full right-6 border-2 border-solid  flex-col w-96 p-3 rounded mt-7 shadow-xl ${
        props.cartVisible ? "absolute" : "hidden"
      }`}
    >
      {props.cartProducts.map((product, index) => {
        return (
          <div
            key={index}
            className="product mb-2 border-2 border-solid p-5 z-20 flex-row flex gap-14 relative items-center "
          >
            <div className="product-image border-2 border-solid p-2">
              <img
                className="w-[105px] h-[115px]  object-scale-down"
                src={product.image}
                alt=""
              />
            </div>
            <div className="product-details flex flex-col - items-center justify-between ">
              <p className="text-[#505050] text-base font-normal">
                {product.title.slice(0, 35)}
              </p>
              <span className="text-[#333] text-base font-semibold mt-2 mb-2 bold">
                {product.price} $
              </span>
              <div className="buttons flex flex-row">
                <button className="confirm-btn border-2 border-solid text-sm font-medium text-[#0D6EFD] mr-3 bg-white p-[6px] rounded">
                  Confirm
                </button>
                <button
                  onClick={() => {
                    props.setCartProducts((oldValues) => {
                      return oldValues.filter(( i) => i !== index);
                    });
                 
                    localStorage.setItem(
                      "cartArray",
                      JSON.stringify(props.cartProducts)
                    );
                  }}
                  className="remove-btn border-2 border-solid text-sm font-medium text-[#FA3434] p-[6px] bg-white rounded"
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
