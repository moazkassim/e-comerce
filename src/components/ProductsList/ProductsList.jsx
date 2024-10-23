import { useContext, useEffect, useState } from "react";
import Product from "../Product";
import axios from "axios";
import LoadingSpinner from "../LoadingSpinner";
import ErrorViewer from "../ErrorViewer";
import { SearchedProductContext } from "../SearchedProductContext";

export default function ProductsList(props) {
  ("hi i am from product list");
  const { searchedProduct, selectedCategory } = useContext(
    SearchedProductContext,
  );
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { setProductsArray, productsArray } = props;
  useEffect(() => {
    "getting products for category ", selectedCategory;
    setIsLoading(true);
    axios
      .get(`https://fakestoreapi.com/products/category/${selectedCategory}`)
      .then((res) => {
        setProductsArray(res.data);
        setIsLoading(false);
      })
      .catch(function (error) {
        setIsLoading(true);
        setError(error.message);
      });
  }, [selectedCategory, setProductsArray]);
  useEffect(() => {
    "getting products for search ", searchedProduct;
    if (searchedProduct) {
      setIsLoading(true);
      axios
        .get("https://fakestoreapi.com/products")
        .then((res) => {
          let arr = res.data.filter((ele) =>
            ele.title.toLowerCase().includes(searchedProduct.toLowerCase()),
          );
          setProductsArray(arr);
          setIsLoading(false);
        })

        .catch(function (error) {
          setError(error.message);
          setIsLoading(false);
        });
    }
  }, [searchedProduct, setProductsArray]);

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

  return (
    <section className="container-categories mb-20 flex w-full flex-row flex-wrap justify-center gap-12">
      {productsArray.map((product) => {
        return <Product key={product.title} product={product} />;
      })}
    </section>
  );
}
