import { useState } from "react";

import { useAppStore } from "../../stores/app-store";
import { Minus, Plus } from "lucide-react";
import { useShallow } from "zustand/react/shallow";
interface BillingData {
  firstName: string | null;
  companyName?: string | null;
  address: string | null;
  apartment?: string | null;
  city: string | null;
  Phone: number | null;
  Email: string | null;
  saveInformationStatus: boolean | null;
}

export default function Checkout() {
  const { cartProducts, decreaseProductQuantity, addCartProduct } = useAppStore(
    useShallow((state) => ({
      cartProducts: state.cartProducts,
      decreaseProductQuantity: state.decreaseProductQuantity,
      addCartProduct: state.addCartProduct,
    })),
  );

  const [billingData, setBillingData] = useState<BillingData>({
    firstName: null,
    companyName: null,
    address: null,
    apartment: null,
    city: null,
    Phone: null,
    Email: null,
    saveInformationStatus: false,
  });
  // const [checked, setChecked] = useState<boolean>(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    let myBillingData: BillingData = { ...billingData };
    const inputName = e.target.name as keyof BillingData;
    myBillingData[inputName] = e.target.value;
    setBillingData(myBillingData);
  }
  let totalPrice: number = 0;
  cartProducts.forEach((product) => {
    totalPrice += product.price * product.quantity;
  });
  console.log("data is ", billingData);
  return (
    <div className="flex flex-col p-2">
      <p className="my-10 text-sm text-[#7D8184]">
        Account / My Account / Product / view Cart /
        <span className="text-black">Checkout</span>
      </p>
      <h1 className="mb-10 text-4xl font-medium">Billing Details</h1>
      {/* first section */}
      <div className="mb-20 flex flex-col gap-20 md:flex-row md:justify-between">
        <div className="flex flex-col gap-8 md:w-2/5">
          <div className="flex flex-col gap-2">
            <label
              className="cursor-pointer text-base text-[#7D8184]"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              name="firstName"
              id="firstName"
              onChange={handleChange}
              type="text"
              autoComplete="given-name"
              className="h-[50px] w-full rounded-md border bg-[#F5F5F5] p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              className="cursor-pointer text-base text-[#7D8184]"
              htmlFor="companyName"
            >
              Company Name
            </label>
            <input
              onChange={handleChange}
              id="companyName"
              name="companyName"
              type="text"
              autoComplete="given-name"
              className="h-[50px] w-full rounded-md border bg-[#F5F5F5] p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              className="cursor-pointer text-base text-[#7D8184]"
              htmlFor="address"
            >
              Street Address <span className="text-[#DB4444]">*</span>
            </label>
            <input
              onChange={handleChange}
              id="address"
              name="address"
              type="text"
              autoComplete="given-name"
              className="h-[50px] w-full rounded-md border bg-[#F5F5F5] p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              className="cursor-pointer text-base text-[#7D8184]"
              htmlFor="apartment"
            >
              Apartment, floor, etc. (optional)
            </label>
            <input
              onChange={handleChange}
              id="apartment"
              name="apartment"
              type="text"
              autoComplete="given-name"
              className="h-[50px] w-full rounded-md border bg-[#F5F5F5] p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              className="cursor-pointer text-base text-[#7D8184]"
              htmlFor="city"
            >
              Town/City
              <span className="text-[#DB4444]">*</span>
            </label>
            <input
              onChange={handleChange}
              name="city"
              id="city"
              type="text"
              autoComplete="given-name"
              className="h-[50px] w-full rounded-md border bg-[#F5F5F5] p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              className="cursor-pointer text-base text-[#7D8184]"
              htmlFor="Phone"
            >
              Phone Number <span className="text-[#DB4444]">*</span>
            </label>
            <input
              onChange={handleChange}
              name="Phone"
              id="Phone"
              type="tel"
              autoComplete="given-name"
              className="h-[50px] w-full rounded-md border bg-[#F5F5F5] p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              className="cursor-pointer text-base text-[#7D8184]"
              htmlFor="Email"
            >
              Email Address <span className="text-[#DB4444]">*</span>
            </label>
            <input
              onChange={handleChange}
              name="Email"
              id="Email"
              type="Email"
              className="h-[50px] w-full rounded-md border bg-[#F5F5F5] p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-row items-center justify-start gap-4">
            <input
              className="peer relative h-5 w-5 shrink-0 cursor-pointer appearance-none rounded-sm border border-gray-500 bg-white checked:border-0 checked:bg-red-500"
              type="checkbox"
              id="saveInformationStatus"
              name="saveInformationStatus"
              onChange={handleChange}
            />
            <svg
              className="pointer-events-none absolute hidden h-5 w-5 stroke-white outline-none peer-checked:block"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <label htmlFor="saveInformationStatus" className="text-base">
              Save this information for faster check-out next time
            </label>
          </div>
        </div>

        {/* second section */}
        <div className="flex flex-col gap-8 md:w-2/5">
          {/* product container div */}
          <div className="flex flex-col gap-8">
            {cartProducts.map((product) => {
              return (
                <div className="flex flex-row items-center justify-between">
                  <div className="flex items-center justify-center gap-4">
                    <div className="min-w-[54px]">
                      <img
                        className="max-h-[54px] max-w-[54px]"
                        src={product.image}
                        alt="checkout-product-image"
                      />
                    </div>
                    <span className="w-[150px]">
                      {product.title.split(" ").slice(0, 2).join(" ")}
                    </span>
                  </div>

                  <div className="flex flex-row items-center justify-between gap-4">
                    <Minus
                      size={16}
                      className="cursor-pointer"
                      onClick={() => {
                        decreaseProductQuantity(product);
                      }}
                    />
                    <span className="w-15 text-[#DB4444]">
                      {product.quantity} item{product.quantity > 1 ? "s" : ""}
                    </span>
                    <Plus
                      size={16}
                      className="cursor-pointer"
                      onClick={() => {
                        addCartProduct(product);
                      }}
                    />
                  </div>

                  <span className="text-base">${product.price}</span>
                </div>
              );
            })}
          </div>
          {/* shipping section */}
          <div className="flex flex-col justify-center gap-4">
            <div className="flex h-10 flex-row justify-between border-b border-[#7D8184]">
              <span>Subtotal:</span>
              <span>${totalPrice}</span>
            </div>
            <div className="flex h-10 flex-row justify-between border-b border-[#7D8184]">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="flex h-10 flex-row justify-between">
              <span>Total:</span>
              <span className="font-medium">${totalPrice}</span>
            </div>
          </div>
          <div className="flex items-start justify-center">
            <button className="h-[44px] w-[192px] rounded-md bg-[#DB4444] text-base font-medium text-white duration-100 ease-in hover:bg-[#B71F3B]">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
