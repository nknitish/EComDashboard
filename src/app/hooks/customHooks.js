import { useState, useEffect } from "react";

export function useFetch(url = "", intialState = "") {
  const [state, setState] = useState(intialState);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setState(data);
      })
      .catch((err) => {
        throw new Error(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [url]);

  return { state, isLoading };
}
