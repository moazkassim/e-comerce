import { useState } from "react";
import { Star } from "lucide-react";
import { Eye } from "lucide-react";
import { Heart } from "lucide-react";
import { toast } from "react-toastify";
import View_Product from "./ViewProduct";
import { Product as IProduct, useAppStore } from "../../stores/app-store";
import { useShallow } from "zustand/shallow";
import { Link } from "react-router-dom";

interface ProductProps {
  product: IProduct;
}
export default function Product(props: ProductProps) {
  console.log("hi i am from product");
  const { product } = props;

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const { addCartProduct } = useAppStore(
    useShallow((state) => ({
      addCartProduct: state.addCartProduct,
      cartProducts: state.cartProducts,
    })),
  );
  function handelAddToCart(product: IProduct) {
    addCartProduct(product);

    toast.success("Added to cart");
  }

  return (
    <div className="relative flex w-[270px] flex-col items-center justify-center outline-white">
      <View_Product
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        product={product}
      />

      {/* heart and watch  */}
      <div className="flex w-[270px] flex-col items-center justify-center rounded bg-[#F5F5F5]">
        <div className="action-icons absolute right-2 top-3">
          <Heart
            size={30}
            className="hover:text-[#DB4444 mb-1 cursor-pointer rounded-full bg-white p-1"
          />

          <Eye
            onClick={() => {
              setIsModalOpen((prev) => !prev);
            }}
            size={30}
            className="cursor-pointer rounded-full bg-white p-[4px] hover:text-[#DB4444]"
          />
        </div>
        <div className="flex h-64 flex-col items-center justify-between bg-transparent">
          <Link to={`/products/${product.id}`}>
            <img
              src={product.image}
              className="mt-5 h-[185px] w-[135px] bg-transparent object-scale-down"
              alt={product.title + "image"}
            />
          </Link>
          <button
            name="add-to-cart"
            className="block h-10 w-[270px] rounded-b-md bg-black text-base font-medium text-white hover:opacity-70"
            onClick={() => handelAddToCart(product)}
          >
            Add To Cart
          </button>
        </div>
      </div>

      <div className="flex w-full flex-col items-start justify-center gap-4 truncate px-1 py-4">
        <Link to={`/products/${product.id}`}>
          <p className="text-over cursor-pointer text-base font-medium text-black">
            {product.title.split(" ").slice(0, 4).join(" ")}
          </p>
        </Link>
        <p className="text-base font-medium leading-5 text-[#DB4444]">
          {product.price} $
        </p>
        <div className="flex w-full flex-row items-center justify-start gap-3">
          <ul className="flex items-center justify-center gap-1">
            <li>
              <Star size={18} color="#FFAD33" className="fill-[#FFAD33]" />
            </li>
            <li>
              <Star size={18} color="#FFAD33" className="fill-[#FFAD33]" />
            </li>
            <li>
              <Star size={18} color="#FFAD33" className="fill-[#FFAD33]" />
            </li>
          </ul>

          <span className="text-sm font-semibold text-black opacity-50">
            ({Math.ceil(product.price + 12)})
          </span>
        </div>
      </div>
    </div>
  );
}
