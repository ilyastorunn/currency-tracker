import React, { useState, useEffect } from "react";
import axios from "axios";
import StockItem from "./StockItem";

const Stock = () => {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const popularSymbols = ["AAPL", "MSFT", "GOOGL", "AMZN", "FB", "TSLA", "BRK.A", "BABA", "JNJ", "WMT"];

        const stockDetails = [];
        for (const symbol of popularSymbols) {
          const stokcResponse = await axios.get(`http://api.marketstack.com/v1/eod?access_key=44058af4dceb7e6c102567fc93cee1c2&symbols=${symbol}`
          );
          const stockData = stokcResponse.data.data[0];

          stockDetails.push({
            symbol: symbol,
            name: stockData.name,
            price: stockData.close,
            change: stockData.close - stockData.open,
            changePercent: ((stockData.close - stockData.open) / stockData.open) * 100
          });
        }

        setStocks(stockDetails);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching stock data:", error);
        setLoading(false);
      }
    };

    fetchStockData();
  }, []);

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <div className="p-5">
      <div className="grid grid-cols-1 gap-4">
        {stocks.map((stock) => (
          <StockItem key={stock.symbol} stock={stock} />
        ))}
      </div>
    </div>
  );
};

export default Stock;