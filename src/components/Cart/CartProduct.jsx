import { useState } from "react";
import { toast } from "react-toastify";
import { useShallow } from "zustand/shallow";
import { useAppStore } from "../store";
import { Plus, Minus } from "lucide-react";

export default function CartProduct(props) {
  const { removeCartProduct, addCartProduct, decreaseProductQuantity } =
    useAppStore(
      useShallow((state) => ({
        removeCartProduct: state.removeCartProduct,
        addCartProduct: state.addCartProduct,
        decreaseProductQuantity: state.decreaseProductQuantity,
      })),
    );
  const { product } = props;

  return (
    <div
      key={product.id}
      className="relative z-40 flex w-full min-w-96 flex-row items-center overflow-hidden border-b-2 border-solid"
    >
      <div className="border-r-[1px] border-solid p-2">
        <img
          className="h-[95px] w-[85px] object-scale-down"
          src={product.image}
          alt="cart-image"
        />
      </div>
      <div className="items-between flex w-full flex-col justify-center gap-2 p-4">
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
          <div className="flex flex-row items-center justify-between gap-8">
            <Minus
              size={16}
              className="cursor-pointer"
              onClick={() => {
                decreaseProductQuantity(product);
              }}
            />
            <span>{product.quantity}</span>
            <Plus
              size={16}
              className="cursor-pointer"
              onClick={() => {
                addCartProduct(product);
              }}
            />
          </div>
          <button
            name="remove-button"
            onClick={() => {
              removeCartProduct(product);
              toast.success("Item removed");
            }}
            className="bg-transparent text-sm font-medium text-[#FA3434]"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
