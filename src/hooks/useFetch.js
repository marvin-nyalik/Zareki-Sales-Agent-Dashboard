import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (url) => {
    try {
      let response = await fetch(url);

      if (!response.ok) {
        throw new Error("Error occured in fetch");
      }

      setLoading(true)
      let data = await response.json();
      setData(data);

      }
    catch(error) {
     setError(error)
    }
    finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData(url);
  },
  [url]
  );

  useEffect(()=>{
    console.log(data)
  }, [data]);

  return {data:data, loading:loading, error:error};
}

export default useFetch;
