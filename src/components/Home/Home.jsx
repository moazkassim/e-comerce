import { useState } from "react";
import Landing from "../Landing/Landing";
import DividingHead from "../DividingHead";
import ProductsList from "../ProductsList/ProductsList";

export default function Home(props) {
  const {
    selectedCategory,
    searchedProduct,
    category,
    setSelectedCategory,
    setCartProducts,
  } = props;
  const [productsArray, setProductsArray] = useState([]);

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
  //   handelSearchedItems(category, searchedProduct);
  // }, [searchedProduct]);
  // console.log("searced arr from state outside", productsArray);

  return (
    <main>
      <Landing
        categoriesArr={category}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <DividingHead title={selectedCategory} />
      <ProductsList
        setCartProducts={setCartProducts}
        selectedCategory={selectedCategory}
        searchedProduct={searchedProduct}
        setProductsArray={setProductsArray}
        productsArray={productsArray}
      />
    </main>
  );
}
