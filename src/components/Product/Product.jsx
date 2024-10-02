import { Star } from "lucide-react";
import { Eye } from "lucide-react";
import { Heart } from "lucide-react";

export default function Product(props) {
  return (
    <section className="container-categories mb-20 flex w-full flex-row flex-wrap justify-center gap-12">
      {props.productsArray.map((product) => {
        return (
          <div
            className="relative flex w-[270px] cursor-pointer flex-col items-center justify-center outline-white"
            key={product.id}
          >
            {/* heart and watch  */}
            <div className="flex w-[270px] flex-col items-center justify-center rounded bg-[#F5F5F5]">
              <div className="action-icons absolute right-2 top-3">
                <Heart
                  size={30}
                  className="hover:text-[#DB4444 mb-1 cursor-pointer rounded-full bg-white p-1"
                />

                <Eye
                  size={30}
                  className="cursor-pointer rounded-full bg-white p-[4px] hover:text-[#DB4444]"
                />
              </div>
              <div className="flex h-64 flex-col items-center justify-between bg-transparent">
                <img
                  src={product.image}
                  className="mt-5 h-[185px] w-[135px] bg-transparent object-scale-down"
                  alt={product.title + "image"}
                />
                <button
                  name="add-to-cart"
                  className="z-50 block h-9 w-[270px] rounded-b-md bg-black text-white hover:opacity-70"
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
                  Add To Cart
                </button>
              </div>
            </div>

            <div className="flex w-full flex-col items-start justify-center gap-4 truncate px-1 py-4">
              <p className="text-over text-md font-bold text-black">
                {product.title.split(" ").slice(0, 4).join(" ")}
              </p>
              <p className="text-lg font-medium leading-5 text-[#DB4444]">
                {product.price} $
              </p>
              <div className="flex w-full flex-row items-center justify-start gap-3">
                <ul className="flex items-center justify-center gap-1">
                  <li>
                    <Star
                      size={18}
                      color="#FFAD33"
                      className="fill-[#FFAD33]"
                    />
                  </li>
                  <li>
                    <Star
                      size={18}
                      color="#FFAD33"
                      className="fill-[#FFAD33]"
                    />
                  </li>
                  <li>
                    <Star
                      size={18}
                      color="#FFAD33"
                      className="fill-[#FFAD33]"
                    />
                  </li>
                </ul>

                <span className="text-sm font-bold text-black opacity-50">
                  ({Math.ceil(product.price + 12)})
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
