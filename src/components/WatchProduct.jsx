import { useEffect } from "react";

export default function WatchProduct(props) {
  useEffect(() => {
    if (props.isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [props.isModalOpen]);
  return (
    <div
      className={`main inset-0 z-50 h-full w-full bg-gray-900 bg-opacity-50 ${
        props.isModalOpen ? "fixed" : "hidden"
      }`}
    >
      <div className="inner absolute left-1/2 top-1/2 flex h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 transform bg-blue-gray-500">
        {/* Product Image Section */}
        <div>
          <img alt="product img" src={props.image} className="" />
        </div>

        {/* Modal Content Section */}
        <div className="relative flex w-full flex-col items-start justify-center gap-8 bg-green-400 px-2">
          <h1 className="font-bold">{props.title}</h1>
          <h3 className="text-gray-700">{props.category}</h3>
          <p className="text-gray-700">{props.description}</p>
          <span className="font-semibold text-red-600">${props.price}</span>
          <div>
            <button>Add to Cart</button>
          </div>
        </div>

        {/* Close Button */}
        <button
          className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-black text-white"
          onClick={() => props.setIsModalOpen((prev) => !prev)}
        >
          &times;
        </button>
      </div>
    </div>
  );
}
