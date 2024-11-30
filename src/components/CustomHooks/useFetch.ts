import axios from "axios";
import { useEffect, useState } from "react";

interface Options {
  enabled: boolean;
}
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const getProductsWithRetry = async (
  url: string,
  times: number,
): Promise<any> => {
  let temp = 0;

  while (temp <= times) {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      temp++;
      if (temp > times) {
        throw error;
      }
      console.log("🚀 ~ temp:", temp);
      await delay(1000);
    }
  }

  throw new Error("request failed");
};

export const useFetch = <T>(url: string, options?: Options) => {
  const { enabled = true } = options || {};
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (enabled) {
      const fetchProducts = async () => {
        setIsLoading(true);
        setError(null);
        try {
          const result = await getProductsWithRetry(url, 3);
          setData(result);
        } catch (err) {
          setError((err as Error).message);
          setIsLoading(false);
        }
      };
      fetchProducts();
    }
  }, [url, enabled]);
  return { data, error, isLoading };
};
