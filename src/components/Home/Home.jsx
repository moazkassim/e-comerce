import React, { useEffect, useState } from "react";
import Landing from "../Landing/Landing";
import DividingHead from "../DividingHead";
import Product from "../Product/Product";
import axios from "axios";
import { Await } from "react-router-dom";
export default function Home(props) {
  const [category, setCategory] = useState([]);
  const [productsArray, setProductsArray] = useState([]);
  const [categoryNameTitle, setCategoryNameTitle] = useState("electronics");
  const getData = async () => {
    const res = await axios.get("https://fakestoreapi.com/products/categories");
    setCategory(res.data);
  };
  useEffect(() => {
    getData();

    // axios
    //   .get("https://fakestoreapi.com/products/categories")
    //   .then((res) => {
    //     setCategory(res.data);
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     console.log(error);
    //   });
  }, []);
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/category/${categoryNameTitle}`)
      .then((res) => {
        setProductsArray(res.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [categoryNameTitle]);

  const getCategoryProducts = async (cat) => {
    const res = await axios.get(
      `https://fakestoreapi.com/products/category/${cat}`
    );
    return res.data;
  };
  async function handelSearchedItems(arr, searchTerm) {
    const searchedItems = [];

    for (let index = 0; index < arr.length; index++) {
      const products = await getCategoryProducts(arr[index]);
      console.log(products);
      searchedItems.push(
        ...products.filter((element) => element.title.includes(searchTerm))
      );
    }

    // axios
    //   .get(`https://fakestoreapi.com/products/category/${cat}`)
    //   .then((res) => {
    //     console.log("data from search", res.data);
    //     res.data.forEach((element) => {
    //       searchedItems.push(element);
    //     });
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     console.log(error);
    //   });

    console.log("finished for");
    // console.log("searced arr items", searchedItems);
    setProductsArray(searchedItems);
    // console.log("searced arr from state", productsArray);
  }

  useEffect(() => {
    handelSearchedItems(category, props.searchedProduct);
  }, [props.searchedProduct]);
  // console.log("searced arr from state outside", productsArray);
  //  console.log("searched arr", searchedItems);
  //   searchedItems.push(res.data);
  return (
    <div>
      <Landing
        categoriesArr={category}
        categoryNameTitle={categoryNameTitle}
        setCategoryNameTitle={setCategoryNameTitle}
      />
      <DividingHead title={categoryNameTitle} />
      <Product
        productsArray={productsArray}
        setCartProducts={props.setCartProducts}
        cartProducts={props.cartProducts}
      />
    </div>
  );
}
