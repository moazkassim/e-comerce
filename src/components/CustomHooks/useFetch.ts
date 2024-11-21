import axios from "axios";
import { useEffect, useState } from "react";

// interface UseFetchReturnData {
//   data: any[];
//   error: string | null;
//   isLoading: boolean;
// }
interface Options {
  enabled: boolean;
}
export const useFetch = <T>(url: string, options?: Options) => {
  const { enabled = true } = options || {};
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (enabled) {
      axios
        .get<T>(url)
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
