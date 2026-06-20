import { useState, useEffect } from "react";

function useFetchFoods(url) {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchFoods() {
      try {
        const response = await fetch(url);
        const data = await response.json();

        setFoods(data.recipes);
      } catch (err) {
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    }

    fetchFoods();
  }, [url]);

  return { foods, loading, error };
}

export default useFetchFoods;