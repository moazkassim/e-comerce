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

          setData(res.data);
          setIsLoading(false);
        })
        .catch(function (error) {
          setIsLoading(false);
          setError(error.message);
        });
    }
  }, [url, enabled]);
  return { data, error, isLoading };
};
