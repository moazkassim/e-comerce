import { useEffect } from "react";
import { useShallow } from "zustand/shallow";
import { useAppStore } from "./store";
import { toast } from "react-toastify";
export default function View_Product(props) {
 console.log("hi i am from view product");
  const { product, isModalOpen, setIsModalOpen } = props;
  const { addCartProduct } = useAppStore(
    useShallow((state) => ({
      addCartProduct: state.addCartProduct,
    })),
  );
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex h-full w-full items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="relative flex h-2/3 w-1/2 items-center justify-center rounded bg-white shadow-md">
        <div className="">
          <img
            alt="product img"
            src={product.image}
            className="max-h-1/2 scale-75"
          />
        </div>

        {/* Modal Content Section */}
        <div className="flex w-full flex-col items-start justify-between gap-6 px-2">
          <h1 className="text-over text-lg font-medium text-black">
            {product.title}
          </h1>
          <h3 className="text-gray-700">{product.category}</h3>
          <p className="text-gray-700">{product.description}</p>
          <span className="font-semibold text-red-600">${product.price}</span>
          <div className="flex w-full items-center justify-center">
            <button
              className="h-10 w-1/2 rounded bg-[#DB4444] text-white"
              onClick={() => {
                addCartProduct(product);

                toast.success("Added to cart");
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>

        {/* Close Button */}
        <button
          className="absolute right-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#DB4444] text-white"
          onClick={() => setIsModalOpen((prev) => !prev)}
        >
          &times;
        </button>
      </div>
    </div>
  );
}
