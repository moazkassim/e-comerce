import axios from "axios";
import { Heart, RefreshCcw, Star, Truck } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner";
import ErrorViewer from "../ErrorViewer";
import { Product as IProduct, useAppStore } from "../../stores/app-store";
import { toast } from "react-toastify";

export default function ProductDetails() {
  const addCartProduct = useAppStore((state) => state.addCartProduct);
  const params = useParams();
  console.log("params", params);
  const [product, setProduct] = useState<IProduct | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${params.productId}`)
      .then((res) => {
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch(function (error) {
        setIsLoading(false);
        setError(error.message);
      });
  }, []);
  // console.log(product, console.log("this from details"));
  function handelAddToCart(product: IProduct) {
    addCartProduct(product);

    toast.success("Added to cart");
  }

  if (isLoading) {
    return (
      <div className="my-20 flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }
  if (error || !product) {
    return <ErrorViewer errorMessage={error} />;
  }
  return (
    <div className="flex flex-col justify-center gap-10 p-10">
      <span className="text-sm text-gray-600">
        {product.category} /<span className="text-black">{product.title}</span>
      </span>
      <div className="flex flex-col justify-between gap-6 md:flex-row md:gap-0">
        <div className="h-ful md: my-10 flex items-center justify-center md:w-1/2">
          <img
            className="max-w-[300px]"
            src={product.image}
            alt="product-image"
          />
        </div>

        <div className="flex flex-col items-start gap-6 md:w-2/5">
          <h1 className="text-2xl font-semibold"> {product.title}</h1>
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
            <li>
              <Star size={18} color="#FFAD33" className="fill-[#FFAD33]" />
            </li>
            <li>
              <Star size={18} />
            </li>
          </ul>
          <span className="text-2xl">$ {product.price}</span>
          <p className="w-full text-sm">{product.description}</p>
          <div className="h-[1px] w-full bg-gray-500"></div>
          <div className="flex gap-3">
            <p>Colours :</p>
            <div className="flex flex-row gap-2">
              <span className="h-5 w-5 rounded-full bg-[#E07575]"></span>
              <span className="h-5 w-5 rounded-full bg-[#A0BCE0]"></span>
            </div>
          </div>
          <div className="flex flex-row items-center gap-3">
            <button
              onClick={() => handelAddToCart(product)}
              className="h-[44px] w-[192px] rounded-md bg-[#DB4444] text-base font-medium text-white duration-100 ease-in hover:bg-[#B71F3B]"
            >
              Buy Now
            </button>
            <button className="flex h-[40px] w-[40px] items-center justify-center rounded-md border border-gray-500">
              <Heart size={25} className="bg-white" />
            </button>
          </div>
          <div className="flex flex-col rounded-md border border-gray-500">
            <div className="flex h-[90px] flex-row items-center justify-center gap-4 border-b-[1px] border-gray-500 p-4">
              <div className="flex items-center justify-center">
                <Truck size={20} />
              </div>
              <div className="flex flex-col items-start justify-start gap-1">
                <h3 className="text-base font-medium">Free Delivery</h3>
                <p className="text-sm font-medium underline">
                  Enter your postal code for Delivery Availability
                </p>
              </div>
            </div>
            <div className="flex h-[90px] flex-row items-center justify-start gap-4 p-4">
              <div className="flex items-center justify-center">
                <RefreshCcw size={20} />
              </div>
              <div className="flex flex-col items-start justify-center gap-1">
                <h3 className="text-base font-medium">Return Delivery</h3>
                <p className="text-sm font-medium underline">
                  Free 30 Days Delivery Returns. Details
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
