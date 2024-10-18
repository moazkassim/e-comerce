import { useEffect, useState } from "react";
import Product from "../Product";
import axios from "axios";
import LoadingSpinner from "../LoadingSpinner";
import ErrorViewer from "../ErrorViewer";

export default function ProductsList(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const {
    selectedCategory,
    searchedProduct,
    setProductsArray,
    productsArray,
    setCartProducts,
  } = props;
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
  }, [selectedCategory]);
  useEffect(() => {
    if (searchedProduct) {
      setError(error.message);
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
  }, [searchedProduct]);

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (error) {
    return <ErrorViewer errorMessage={error} />;
  }

  return (
    <section className="container-categories mb-20 flex w-full flex-row flex-wrap justify-center gap-12">
      {productsArray.map((product) => {
        return (
          <Product
            key={product.title}
            product={product}
            setCartProducts={setCartProducts}
          />
        );
      })}
    </section>
  );
}
