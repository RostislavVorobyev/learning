import { useCallback, useEffect, useState } from "react";

async function sendHttpRequest(url, config) {
  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Something went wrong.");
    }

    return data;
  } catch {
    console.log("Failed to fetch.");
  }
}

export default function useHttp(url, config, initialData) {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [responseData, setResponseData] = useState(initialData);

  const sendRequest = useCallback(
    async function sendRequest() {
      setIsLoading(true);
      try {
        console.log("send request");
        const data = await sendHttpRequest(url, config);
        setResponseData(data);
      } catch (e) {
        setError(e.message || "Something went wrong");
      }
      setIsLoading(false);
    },
    [url, config]
  );

  useEffect(() => {
    if (config?.method === "GET") sendRequest();
  }, [sendRequest]);

  return {
    loadingState: isLoading,
    error,
    data: responseData,
  };
}
