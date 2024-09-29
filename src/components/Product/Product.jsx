import React from "react";
import { Star } from "lucide-react";
import { Eye } from "lucide-react";
import { Heart } from "lucide-react";

export default function Product(props) {
  return (
    <section className="container-categories mb-20 flex flex-row flex-wrap justify-center gap-12 pl-20 pr-20">
      {props.productsArray.map((product) => {
        return (
          <div
            className="relative flex w-64 cursor-pointer flex-col items-center justify-center rounded-md border-2 bg-white p-[2px] pt-6 shadow-md outline-white"
            key={product.id}
          >
            <div className="action-icons absolute right-1 top-1">
              <Heart
                size={30}
                className="mb-1 cursor-pointer rounded-full bg-white p-1 hover:text-[#ee50ff]"
              />

              <Eye
                size={30}
                className="cursor-pointer rounded-full bg-white p-[4px] hover:text-[#ee50ff]"
              />
            </div>
            <img
              src={product.image}
              className="h-[185px] w-[135px] object-scale-down pt-8"
              alt=""
            />

            <div className="mt-8 h-[120px] w-full truncate rounded border-t-2 p-2 pt-3 opacity-80">
              <div className="flex items-center justify-between">
                <p className="product-Price mb-3 text-lg font-medium leading-5 text-[#ee50ff]">
                  {product.price} $
                </p>
                <button
                  className="right-2 rounded bg-[#ee50ff] p-[3px] text-sm text-white"
                  onClick={() => {
                    const newProducts = [product, ...props.cartProducts];
                    props.setCartProducts(newProducts);

                    localStorage.setItem(
                      "cartArray",
                      JSON.stringify(newProducts),
                    );
                    console.log(
                      "cart size after adding the product",
                      props.cartProducts.length,
                    );
                  }}
                >
                  Add
                </button>
              </div>
              <ul className="mt-2 flex items-center">
                <li>
                  <Star size={18} color="#FFDE21" className="fill-[#FFDE21]" />
                </li>
                <li>
                  <Star size={18} color="#FFDE21" className="fill-[#FFDE21]" />
                </li>
                <li>
                  <Star size={18} color="#FFDE21" className="fill-[#FFDE21]" />
                </li>

                <li>
                  <span className="ml-2 text-sm font-semibold opacity-50">
                    (88)
                  </span>
                </li>
              </ul>
              <p className="text-over mt-3 text-[#8B96A5]">{product.title}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}
