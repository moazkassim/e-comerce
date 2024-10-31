import { useEffect, useState } from "react";
import Product from "../Product";
import axios from "axios";
import LoadingSpinner from "../LoadingSpinner";
import ErrorViewer from "../ErrorViewer";

import { useAppStore } from "../store";
import { useShallow } from "zustand/shallow";

export default function ProductsList() {
  console.log("iam from product list");
  const { selectedCategory } = useAppStore(
    useShallow((state) => ({
      selectedCategory: state.selectedCategory,
    })),
  );
  const [productsArray, setProductsArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://fakestoreapi.com/products/category/${selectedCategory}`)
      .then((res) => {
        setProductsArray(res.data);
        setIsLoading(false);
      })
      .catch(function (error) {
        setIsLoading(false);
        setError(error.message);
      });
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

  if (isLoading) {
    return (
      <div className="my-20 flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }
  if (error) {
    return <ErrorViewer errorMessage={error} />;
  }
  if (productsArray.length == 0) {
    return null;
  }
  return (
    <section className="container-categories mb-20 flex w-full flex-row flex-wrap justify-center gap-12">
      {productsArray.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </section>
  );
}
