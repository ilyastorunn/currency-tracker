import { useEffect, useState } from "react";
import axios from "axios";

const TopCoins = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: 'usd',
              order: 'market_cap_desc',
              per_page: 10,
              page: 1,
              sparkline: false,
              price_change_percentage: '1h,24h,7d,14d,30d,200d,1y',
            },
          }
        );
        setCoins(response.data);
      } catch (error) {
        console.error("Error fetching coins:", error);
      }
    };

    fetchCoins();
  }, []);

  return (
    <div className="flex flex-col w-full max-w-[1200px] mx-auto">
      <div className="flex flex-col items-start gap-[10px] self-stretch rounded-[10px] bg-[#151419] p-4">
        <div className="flex w-full justify-between items-center px-[40px]">
          <span className="text-[#868F97] w-1/6">Coin</span>
          <span className="text-[#868F97] w-1/6 text-center">Price</span>
          <span className="text-[#868F97] w-1/6 text-center">24h Change</span>
          <span className="text-[#868F97] w-1/6 text-center">7d Change</span>
          <span className="text-[#868F97] w-1/6 text-center">30d Change</span>
          <span className="text-[#868F97] w-1/6 text-right">Market Cap</span>
        </div>
      </div>
      <div className="bg-[#131419] rounded-[10px] p-[40px]">
        <div className="flex flex-col gap-[28px]">
          {coins.map((coin) => (
            <div
              key={coin.id}
              className="flex items-center justify-between p-2 border-[#2c2f36] gap-[28px]"
            >
              <div className="flex items-center gap-2 w-1/6">
                <img
                  src={coin.image}
                  alt={coin.name}
                  className="w-6 h-6 rounded-full"
                />
                <span className="text-white text-lg">{coin.name}</span>
                <span className="text-[#868F97] text-sm">{coin.symbol.toUpperCase()}</span>
              </div>
              <span className="text-white text-lg w-1/6 text-center">
                ${coin.current_price ? coin.current_price.toFixed(2) : 'N/A'}
              </span>
              <span
                className={`text-lg w-1/6 text-center ${
                  coin.price_change_percentage_24h < 0
                    ? "text-red-400"
                    : "text-green-400"
                }`}
              >
                {coin.price_change_percentage_24h !== undefined ? coin.price_change_percentage_24h.toFixed(1) : 'N/A'}%
              </span>
              <span
                className={`text-lg w-1/6 text-center ${
                  coin.price_change_percentage_7d < 0
                    ? "text-red-400"
                    : "text-green-400"
                }`}
              >
                {coin.price_change_percentage_7d !== undefined ? coin.price_change_percentage_7d.toFixed(1) : 'N/A'}%
              </span>
              <span
                className={`text-lg w-1/6 text-center ${
                  coin.price_change_percentage_30d < 0
                    ? "text-red-400"
                    : "text-green-400"
                }`}
              >
                {coin.price_change_percentage_30d !== undefined ? coin.price_change_percentage_30d.toFixed(1) : 'N/A'}%
              </span>
              <span className="text-white text-lg w-1/6 text-right">
                ${coin.market_cap ? coin.market_cap.toLocaleString() : 'N/A'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopCoins;