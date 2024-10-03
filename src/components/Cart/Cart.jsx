import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Cart(props) {
  return (
    <section
      className={`right-6 z-50 mt-1 max-w-96 flex-col rounded bg-[#F5F7F8] shadow-xl delay-700 ${
        props.cartVisible ? "absolute" : "hidden"
      }`}
    >
      <ToastContainer />
      {props.cartProducts.map((product, index) => {
        return (
          <div
            key={index}
            className="relative z-40 flex w-full min-w-96 flex-row items-center overflow-hidden border-b-2 border-solid"
          >
            <div className="border-r-[1px] border-solid p-2">
              <img
                className="h-[95px] w-[85px] object-scale-down"
                src={product.image}
                alt="cart-image"
              />
            </div>
            <div className="items-between flex w-full flex-col justify-center p-4">
              <div className="flex flex-row items-start justify-between">
                <div className="flex flex-col items-start justify-between gap-2">
                  <h1 className="text-md font-medium opacity-80">
                    {product.title.split(" ").slice(0, 2).join(" ")}
                  </h1>
                  <p className="text-sm opacity-60">Salmon</p>
                </div>
                <span className="font-semibold">${product.price}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs">Qty 1</span>
                <button
                  name="remove-button"
                  onClick={async () => {
                    let testArr = [];
                    testArr = props.cartProducts.filter((_, i) => i !== index);
                    props.setCartProducts(testArr);
                    await localStorage.setItem(
                      "cartArray",
                      JSON.stringify(testArr),
                    );
                    toast.success("Added to cart", {
                      position: "bottom-right",
                      autoClose: 2000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: false,
                      draggable: true,
                      progress: undefined,
                      theme: "light",
                    });
                  }}
                  className="bg-transparent text-sm font-medium text-[#FA3434]"
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
