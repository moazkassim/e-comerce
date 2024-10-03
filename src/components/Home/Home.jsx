import React, { useEffect, useState } from "react";
import Landing from "../Landing/Landing";
import DividingHead from "../DividingHead";
import Product from "../Product/Product";
import axios from "axios";

export default function Home(props) {
  const [productsArray, setProductsArray] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://fakestoreapi.com/products/category/${props.categoryNameTitle}`,
      )
      .then((res) => {
        setProductsArray(res.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [props.categoryNameTitle]);

  // const getCategoryProducts = async () => {
  //   const res = await axios.get(" https://fakestoreapi.com/products");
  //   return res.data;
  // };
  // async function handelSearchedItems(arr, searchTerm) {
  //   const searchedItems = [];

  //   const products = await getCategoryProducts();
  //   console.log(products);
  //   searchedItems.push(
  //     ...products.filter((element) => element.title.includes(searchTerm))
  //   );

  //   // axios
  //   //   .get(`https://fakestoreapi.com/products/category/${cat}`)
  //   //   .then((res) => {
  //   //     console.log("data from search", res.data);
  //   //     res.data.forEach((element) => {
  //   //       searchedItems.push(element);
  //   //     });
  //   //   })
  //   //   .catch(function (error) {
  //   //     // handle error
  //   //     console.log(error);
  //   //   });

  //   console.log("finished for");
  //   // console.log("searced arr items", searchedItems);
  //   setProductsArray(searchedItems);
  //   // console.log("searced arr from state", productsArray);
  // }

  // useEffect(() => {
  //   handelSearchedItems(category, props.searchedProduct);
  // }, [props.searchedProduct]);
  // console.log("searced arr from state outside", productsArray);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        let arr = res.data.filter((ele) =>
          ele.title.toLowerCase().includes(props.searchedProduct.toLowerCase()),
        );
        setProductsArray(arr);
        
      })

      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [props.searchedProduct]);
  // console.log("searced arr from state outside", productsArray);
  //  console.log("searched arr", searchedItems);
  //   searchedItems.push(res.data);
  return (
    <div className="">
      <Landing
        categoriesArr={props.category}
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
