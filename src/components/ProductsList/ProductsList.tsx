import { useEffect, useState } from "react";
import Product from "../Product";
import axios from "axios";
import LoadingSpinner from "../LoadingSpinner";
import ErrorViewer from "../ErrorViewer";

import { Product as IProduct, useAppStore } from "../../stores/app-store";

export default function ProductsList() {
  console.log("iam from product list");
  const selectedCategory = useAppStore((state) => state.selectedCategory);

  const [productsArray, setProductsArray] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (selectedCategory) {
      axios
        .get<IProduct[]>(
          `https://fakestoreapi.com/products/category/${selectedCategory}`,
        )
        .then((res) => {
          setProductsArray(res.data);
          setIsLoading(false);
        })
        .catch(function (error) {
          setIsLoading(false);
          setError(error.message);
        });
    }
  }, [selectedCategory, setProductsArray]);

  // useEffect(() => {
  //   "getting products for search ", searchedProduct;
  //   if (searchedProduct) {
  //     setIsLoading(true);
  //     axios
  //       .get("https://fakestoreapi.com/products")
  //       .then((res) => {
  //         let arr = res.data.filter((ele) =>
  //           ele.title.toLowerCase().includes(searchedProduct.toLowerCase()),
  //         );
  //         setProductsArray(arr);
  //         setIsLoading(false);
  //       })

  //       .catch(function (error) {
  //         setError(error.message);
  //         setIsLoading(false);
  //       });
  //   }
  // }, [searchedProduct, setProductsArray]);
  if (error) {
    return <ErrorViewer errorMessage={error} />;
  }
  if (isLoading) {
    return (
      <div className="my-20 flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }
  if (productsArray.length == 0) {
    return <p>there is no products</p>;
  }
  return (
    <section className="container-categories mb-20 flex w-full flex-row flex-wrap justify-center gap-12">
      {productsArray.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </section>
  );
}
