import { useEffect, useState } from "react";

export function useFetch(fetchCallback, initialValue) {
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();
  const [fetchedData, setFetchedData] = useState();

  useEffect(() => {
    async function fetch() {
      setIsFetching(true);
      try {
        const data = await fetchCallback();
        setFetchedData(data);
      } catch (error) {
        setError({ message: error.message || "Failed to fetch data." });
      }

      setIsFetching(false);
    }

    fetch();

    return { isFetching, error, data: fetchedData, setFetchedData };
  }, [fetchCallback]);
}
