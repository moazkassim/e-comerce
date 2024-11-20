import { useEffect, useState } from "react";
import Product from "./ProductCard";
import LoadingSpinner from "../LoadingSpinner";
import ErrorViewer from "../ErrorViewer";
import { Product as IProduct, useAppStore } from "../../stores/app-store";
import PaginationButtons from "./PaginationButtons";
import { useFetch } from "../CustomHooks/useFetch";
import { ArrowDownUp } from "lucide-react";
import { useShallow } from "zustand/shallow";

export default function ProductsList() {
  interface UseFetchReturnData {
    data: null | IProduct[];
    error: string | null;
    isLoading: boolean;
  }
  const { selectedCategory, searchedProduct } = useAppStore(
    useShallow((state) => ({
      selectedCategory: state.selectedCategory,
      searchedProduct: state.searchedProduct,
    })),
  );
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedFilter, setSelectedFilter] = useState("");
  // const [productsArray, setProductsArray] = useState<IProduct[]>([]);
  const handleSelectChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ): void => {
    setSelectedFilter(event.target.value);
  };
  // useEffect(() => {
  //   if (selectedCategory) {
  //     axios
  //       .get<IProduct[]>(
  //         `https://fakestoreapi.com/products/category/${selectedCategory}`,
  //       )
  //       .then((res) => {
  //         setProductsArray(res.data);
  //         setIsLoading(false);
  //       })
  //       .catch(function (error) {
  //         setIsLoading(false);
  //         setError(error.message);
  //       });
  //   }
  // }, [selectedCategory, setProductsArray, currentPage]);

  // useEffect(() => {
  //   if (selectedCategory) {
  //     axios
  //       .get<IProduct[]>("https://fakestoreapi.com/products")
  //       .then((res) => {
  //         setPosts(res.data);
  //         setIsLoading(false);
  //         setPagesNumber(Math.ceil(posts.length / postsPerPage));
  //       })
  //       .catch(function (error) {
  //         setIsLoading(false);
  //         setError(error.message);
  //       });
  //   }
  // }, [currentPage]);
  const {
    data = [],
    error,
    isLoading,
  }: UseFetchReturnData = useFetch(
    `https://fakestoreapi.com/products/category/${selectedCategory}?sort=${selectedFilter}`,
    // { enabled: selectedCategory ? true : false },
    { enabled: Boolean(selectedCategory) },
  );

  const pageArr = data?.filter(
    (_, index) => index >= 8 * currentPage - 8 && index < currentPage * 8,
  );

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
  if (data.length == 0) {
    return <p>there is no products</p>;
  }
  return (
    <div className="flex flex-col items-center">
      <div className="relative mb-10 flex h-12 w-40 overflow-hidden rounded-md bg-black">
        <select
          value={selectedFilter}
          onChange={handleSelectChange}
          className="flex-1 cursor-pointer appearance-none bg-transparent px-4 py-3 text-white outline-none"
        >
          <option className="bg-black" value="asc">
            Asc
          </option>
          <option className="bg-black" value="desc">
            Desc
          </option>
        </select>

        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-white">
          <ArrowDownUp />
        </span>
      </div>

      <div className="container-categories mb-20 flex w-full flex-row flex-wrap justify-center gap-12">
        {pageArr.map((product: IProduct) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
      <PaginationButtons
        productsNumber={data.length}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
