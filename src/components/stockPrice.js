import React, { useEffect, useState } from "react";
import yahooFinance from "yahoo-finance2";

const StockTicker = ({ symbol }) => {
  const [stockPrice, setStockPrice] = useState(null);
  const [currency, setCurrency] = useState("");

  useEffect(() => {
    const fetchStockPrice = async () => {
      try {
        const result = await yahooFinance.quote(symbol);
        setStockPrice(result.regularMarketPrice);
        setCurrency(result.currency);
      } catch (error) {
        console.error("Error fetching stock price:", error);
      }
    };

    fetchStockPrice();
    const interval = setInterval(fetchStockPrice, 30000); // Refresh every 30 sec

    return () => clearInterval(interval);
  }, [symbol]);

  return (
    <div className="stock-ticker">
      <h5>FirstService Corporation (FSV)</h5>
      {stockPrice ? (
        <p>
          Current Price: <strong>{stockPrice} {currency}</strong>
        </p>
      ) : (
        <p>Loading stock data...</p>
      )}
    </div>
  );
};

export default StockTicker;
