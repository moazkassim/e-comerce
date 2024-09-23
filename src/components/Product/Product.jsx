import React from "react";
import { Star } from "lucide-react";
import { Eye } from "lucide-react";
import { Heart } from "lucide-react";

export default function Product(props) {
  return (
    <section className="container-categories mb-20 pr-20 pl-20 flex flex-row flex-wrap justify-center gap-12">
      {props.productsArray.map((product) => {
        return (
          <div
            className="cate p-[2px] pt-6 outline-white  bg-white relative border-2 rounded-md w-64 flex items-center justify-center cursor-pointer flex-col shadow-md"
            key={product.id}
          >
            <div className="action-icons top-1 right-1 absolute">
              <Heart
                size={30}
                className="mb-1 cursor-pointer bg-white rounded-full p-1"
              />

              <Eye
                size={30}
                className="cursor-pointer bg-white rounded-full p-[4px]"
              />
            </div>
            <img
              src={product.image}
              className="pt-8 w-[135px] h-[185px] object-scale-down"
              alt=""
            />

            <div className="rounded  opacity-80 inner-cat mt-8 border-t-2 pt-3 h-[120px] w-full p-2 truncate">
              <div className="price-data flex items-center justify-between">
                <p className="product-Price text-lg font-medium leading-5 mb-3 text-[#ee50ff]">
                  {product.price} $
                </p>
                <button
                  className="addProductToCart text-sm  rounded bg-[#ee50ff] text-white p-[3px] absolute right-2"
                  onClick={() => {
                    props.setCartProducts([product, ...props.cartProducts]);

                    localStorage.setItem(
                      "cartArray",
                      JSON.stringify(props.cartProducts)
                    );
                  }}
                >
                  Add
                </button>
              </div>
              <ul className="flex items-center mt-2">
                <li>
                  <Star size={18} color="#FFDE21" className=" fill-[#FFDE21]" />
                </li>
                <li>
                  <Star size={18} color="#FFDE21" className=" fill-[#FFDE21]" />
                </li>
                <li>
                  <Star size={18} color="#FFDE21" className=" fill-[#FFDE21]" />
                </li>

                <li>
                  <span className="font-semibold text-sm opacity-50 ml-2">
                    (88)
                  </span>
                </li>
              </ul>
              <p className="mt-3 text-[#8B96A5] text-over">
                {product.description}
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
}
