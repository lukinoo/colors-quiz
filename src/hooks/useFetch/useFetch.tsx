import { useEffect, useState } from "react";
import axios from "axios";
import { Colors } from "./useFetch.types";

export const useFetch = (url: string): [Array<Colors>, boolean] => {
  const [data, setData] = useState<Array<Colors>>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchColors = () => {
    setIsLoading(true);

    axios
      .get(url)
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchColors();
  }, [url]);

  return [data, isLoading];
};
