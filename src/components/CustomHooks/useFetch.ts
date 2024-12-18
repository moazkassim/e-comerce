import axios from "axios";
import { useEffect, useState } from "react";

interface Options {
  enabled: boolean;
   retryTimes: number ,
   delayTime: number ,
}
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
// const fetchDataWithRetry = async (
//   url: string,
//   retryTimes: number,
//   delayTime: number,
// ): Promise<any> => {
//   let retryCount = 0;

//   while (true) {
//     try {
//       const response = await axios.get(url);
//       return response.data;
//     } catch (error) {
//       retryCount++;

//       await delay(delayTime);
//       if (retryCount > retryTimes) {
//         throw error;
//       }
//     }
//   }
// };
const fetchDataWithRetry = async (
  url: string,
  retryTimes: number = 0,
  delayTime: number = 1000,
  currentRetryCount: number = 0,
): Promise<any> => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    await delay(delayTime);
    if (currentRetryCount > retryTimes) {
      throw error;
    }
    console.log("retry", currentRetryCount);
    fetchDataWithRetry(url, 3, 1000, currentRetryCount + 1);
  }
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
          const result = await fetchDataWithRetry(url, 3, 1000);
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
