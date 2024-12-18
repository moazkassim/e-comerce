import Landing from "../Landing/Landing";
import { DividingHead } from "../DividingHead";
import ProductsList from "../ProductsList/ProductsList";

export default function Home() {
  console.log("hi i am from Home");

  // const getCategoryProducts = async () => {
  //   const res = await axios.get(" https://fakestoreapi.com/products");
  //   return res.data;
  // };
  // async function handelSearchedItems(arr, searchTerm) {
  //   const searchedItems = [];

  //   const products = await getCategoryProducts();
  //    (products);
  //   searchedItems.push(
  //     ...products.filter((element) => element.title.includes(searchTerm))
  //   );

  //   // axios
  //   //   .get(`https://fakestoreapi.com/products/category/${cat}`)
  //   //   .then((res) => {
  //   //      ("data from search", res.data);
  //   //     res.data.forEach((element) => {
  //   //       searchedItems.push(element);
  //   //     });
  //   //   })
  //   //   .catch(function (error) {
  //   //     // handle error
  //   //     console.log(error);
  //   //   });

  //    ("finished for");
  //   //  ("searced arr items", searchedItems);
  //   setProductsArray(searchedItems);
  //   //  ("searced arr from state", productsArray);
  // }

  // useEffect(() => {
  //   handelSearchedItems(category, searchedProduct);
  // }, [searchedProduct]);
  //  ("searced arr from state outside", productsArray);

  return (
    <main>
      <Landing />
      <DividingHead />
      <ProductsList />
    </main>
  );
}
