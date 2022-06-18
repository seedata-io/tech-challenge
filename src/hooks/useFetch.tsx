import { useState, useCallback } from "react";

export const useFetch = () => {
  // const [data, setData] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendRequest = useCallback(
    async (
      url: string,
      options: {
        method: string;
        headers?: any;
        body?: string;
      }
    ) => {
      setLoading(true);

      try {
        const response = await fetch(url, {
          method: options.method,
          headers: options.headers,
          body: options.body,
        });

        const responseData = await response.json();

        if (!response.ok) {
          throw response;
        }

        setLoading(false);
        return responseData;
      } catch (err: any) {
        setLoading(false);
        setError(true);

        throw err;
      }
    },
    []
  );

  return { loading, error, sendRequest };
};

export default useFetch;
