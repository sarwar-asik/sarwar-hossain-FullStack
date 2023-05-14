import { useEffect, useState } from "react";

const useGetData = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  

  useEffect(() => {
    // console.log(url, "...............");
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        if (!res?.ok) {
          setLoading(true);
          setError(true);
          return
        }
        else{
            const getData = await res.json();
            setData(getData)
        }
      } catch (error) {
        const {name,message,stack} = error
        setError({name,message,stack});
      }
    };
    fetchData();
  }, [url]);

  return [data, loading, error];
};

export default useGetData;
