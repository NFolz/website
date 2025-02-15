import React, { useEffect, useState } from "react";

const API_KEY = process.env.REACT_APP_ALPHA_VANTAGE_KEY;


const StockTicker = ({ symbol }) => {
  const [stockPrice, setStockPrice] = useState(null);
  const [currency, setCurrency] = useState("USD"); // Alpha Vantage doesn't return currency info
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStockPrice = async () => {
      try {
        const response = await fetch(
          `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`
        );
        const data = await response.json();

        if (data["Global Quote"]) {
          setStockPrice(data["Global Quote"]["05. price"]);
        } else {
          console.error("Invalid response from Alpha Vantage:", data);
        }
      } catch (error) {
        console.error("Error fetching stock data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStockPrice();
    const interval = setInterval(fetchStockPrice, 600000000); // Refresh every 60 sec

    return () => clearInterval(interval);
  }, [symbol]);

  return (
    <div className="stock-ticker">
      <h5>FirstService Corporation ({symbol})</h5>
      {loading ? (
        <p>Loading stock data...</p>
      ) : (
        <p>
          Current Price: <strong>${stockPrice} {currency}</strong>
        </p>
      )}
    </div>
  );
};

export default StockTicker;
