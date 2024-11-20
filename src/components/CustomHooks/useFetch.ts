import axios from "axios";
import { useEffect, useState } from "react";
import { Product as IProduct } from "../../stores/app-store";
interface UseFetchReturnData {
  data: IProduct[];
  error: string | null;
  isLoading: boolean;
}
interface Options {
  enabled: boolean;
}
export const useFetch = (
  url: string,
  options?: Options,
  searchedProduct?: string,
): UseFetchReturnData => {
  const { enabled } = options || {};
  const [data, setData] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (enabled) {
      axios
        .get<IProduct[]>(url)
        .then((res) => {
          if (searchedProduct) {
            let arr = res.data.filter((ele) =>
              ele.title.toLowerCase().includes(searchedProduct.toLowerCase()),
            );
            setData(arr);
          } else {
            setData(res.data);
          }
          setIsLoading(false);
        })
        .catch(function (error) {
          setIsLoading(false);
          setError(error.message);
        });
    }
  }, [url, enabled, searchedProduct]);
  return { data, error, isLoading };
};
