import { MapPinned } from "lucide-react";
import React from "react";

export default function Cart(props) {
  return (
    <section
      className={` delay-700 z-50 border-slate-100 bg-white  max-w-full right-6 border-2 border-solid  flex-col w-96 p-3 rounded mt-16 shadow-xl ${
        props.cartVisible ? "absolute" : "hidden"
      }`}
    >
      {props.cartProducts.map((product, index) => {
        return (
          <div key={index}>
            <div className="product-image border-2 border-solid p-2">
              <img className="w-20 h-20" src={product.image} alt="" />
            </div>
            <div className="product-details flex flex-col - items-center justify-between">
              <p className="text-[#505050] text-base font-normal">
                {product.description}
              </p>
              <span className="text-[#333] text-base font-semibold mt-2 mb-2">
                {product.price} $
              </span>
              <div className="buttons flex flex-row">
                <button className="confirm-btn border-2 border-solid text-sm font-normal text-[#0D6EFD] mr-3 bg-white p-[6px] rounded">
                  Confirm
                </button>
                <button
                  onClick={() => {
                    props.setCartProducts((oldValues) => {
                      return oldValues.filter((_, i) => i !== index);
                    });
                    console.log(
                      "cart propducts after delete",
                      props.cartProducts.length
                    );
                    localStorage.setItem(
                      "cartArray",
                      JSON.stringify(props.cartProducts)
                    );
                  }}
                  className="remove-btn border-2 border-solid text-sm font-normal text-[#FA3434] p-[6px] bg-white rounded"
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
