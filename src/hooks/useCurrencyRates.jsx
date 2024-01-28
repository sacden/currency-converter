import { useState, useEffect } from "react";

function useCurrencyRates(API_URL, firstCurrency) {
  const [rates, setRates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`${API_URL}${firstCurrency}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((responseData) => {
        setRates(Object.entries(responseData.rates));
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [API_URL, firstCurrency]);

  return { rates, loading, error };
}

export default useCurrencyRates;
