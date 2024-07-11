import axios from "axios";
import { useEffect, useState } from "react";
import { TrendingDown, TrendingUp } from "../icons/icons";

const MarketCap = () => {
  const [topCoins, setTopCoins] = useState([]);

  useEffect(() => {
    const fetchTopCoins = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: "usd",
              order: "market_cap_desc",
              per_page: 4,
              page: 1,
            },
          }
        );
        setTopCoins(response.data);
      } catch (error) {
        console.error("Error fetching top coins:", error);
      }
    };

    fetchTopCoins();
  }, []);

  return (
    <div className="w-full max-w-[1056px] bg-[#131419] rounded-[5px] p-4">
        <div className="flex flex-col gap-4">
            {topCoins.map((coin) => (
                <div key={coin.id} className="flex items-center justify-between p-2 border-b border-[#2c2f36]">
                    <div className="flex items-center gap-2 w-1/5">
                        <img src={coin.image} alt={coin.name} className="w-6 h-6 rounded-full" />
                        <span className="text-white text-lg">{coin.name}</span>
                        <span className="text-[#8B8D98] text-sm">{coin.symbol.toUpperCase()}</span>
                    </div>
                    <span className="text-white text-lg w-1/5">${coin.current_price.toFixed(2)}</span>
                    <span className={`text-lg ${coin.price_change_percentage_24h < 0 ? 'text-red-400' : 'text-green-400'}`}>
                        {coin.price_change_percentage_24h < 0 ? <TrendingDown /> : <TrendingUp />}
                        {coin.price_change_percentage_24h.toFixed(2)}%
                    </span>
                    <span className="text-white text-lg w-1/5">${coin.market_cap.toLocaleString()}</span>
                    <span className="text-[#8B8D98] text-sm w-1/5">${coin.total_volume.toLocaleString()}</span>
                </div>
            ))}
        </div>
    </div>
  );
};

export default MarketCap;