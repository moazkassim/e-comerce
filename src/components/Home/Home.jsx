import React, { useEffect, useState } from "react";
import Landing from "../Landing/Landing";
import DividingHead from "../DividingHead";
import Product from "../Product/Product";
import axios from "axios";
export default function Home(props) {
  const [category, setCategory] = useState([]);
  const [productsArray, setProductsArray] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((res) => {
        setCategory(res.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);
  useEffect(() => {
    axios
      .get(
        `https://fakestoreapi.com/products/category/${props.categoryNameTitle}`
      )
      .then((res) => {
        setProductsArray(res.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [props.categoryNameTitle]);

  return (
    <div>
      <Landing
        categoriesArr={category}
        categoryNameTitle={props.categoryNameTitle}
        setCategoryNameTitle={props.setCategoryNameTitle}
      />
      <DividingHead title={props.categoryNameTitle} />
      <Product
        productsArray={productsArray}
        setCartProducts={props.setCartProducts}
        cartProducts={props.cartProducts}
      />
    </div>
  );
}
