import { useEffect } from "react";
import { toast } from "react-toastify";
export default function View_Product(props) {
  const {
    product,
    isModalOpen,
    setIsModalOpen,
    setCartProducts,
    cartProducts,
  } = props;

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
                const newProducts = [product, ...cartProducts];
                setCartProducts(newProducts);

                localStorage.setItem("cartArray", JSON.stringify(newProducts));
                toast.success("Added to cart", {
                  position: "bottom-right",
                  autoClose: 3000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: false,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                });
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
