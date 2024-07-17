import { useEffect, useState } from "react";
import axios from "axios";
import { TrendingDown, TrendingUp } from "../icons/icons";
import { Link } from "react-router-dom";
// import { currencyFormat } from "../utils";

const TrendingWidget = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/search/trending"
        );
        setTrendingCoins(response.data.coins.slice(0, 6));
      } catch (error) {
        console.error("Error fetching trending coins:", error);
      }
    };

    fetchTrendingCoins();
  }, []);

  const firstColumnCoins = trendingCoins.slice(0, 3);
  const secondColumnCoins = trendingCoins.slice(3, 6);

  return (
    <div className="flex w-full max-w-[640px] px-[68px] py-[42px] flex-col items-start gap-[10px] rounded-[5px] bg-[#131419]">
      <span className="text-[20px] text-white mb-5">Trending</span>
      <div className="flex w-full h-full items-start gap-7">
        <div className="flex flex-col items-start gap-7 w-1/2">
          {firstColumnCoins.map((coin) => (
            <Link
              to={`/coin/${coin.item.id}`}
              key={coin.item.id}
              style={{ textDecoration: "none" }}
            >
              <div className="flex items-center justify-start p-2">
                <div className="flex items-center justify-center gap-1">
                  <img
                    src={coin.item.small}
                    className="w-6 h-6 mr-1 rounded-full"
                    alt={coin.item.name}
                  />
                  <span className="text-white text-lg">{coin.item.name}</span>
                  <span className="text-[#8B8D98] text-sm">
                    {coin.item.symbol.toUpperCase()}
                  </span>
                </div>
                <div className="flex items-center justify-center gap-5">
                  <span className="text-[#8B8D98] text-sm pl-5">
                    ${parseFloat(coin.item.price_btc).toFixed(6)}
                  </span>
                  <span
                    className={`flex items-center gap-1 ${
                      coin.item.price_change_percentage_24h < 0
                        ? "text-red-400"
                        : "text-green-400"
                    }`}
                  >
                    {coin.item.price_change_percentage_24h < 0 ? (
                      <TrendingDown />
                    ) : (
                      <TrendingUp />
                    )}
                  </span>
                  <span className="text-white">{coin.item.price_change_percentage_24h}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex flex-col items-start gap-7 w-1/2">
          {secondColumnCoins.map((coin) => (
            <Link
              to={`/coin/${coin.item.id}`}
              key={coin.item.id}
              style={{ textDecoration: "none" }}
            >
              <div className="flex items-center justify-start p-2 w-full">
                <div className="flex items-center justify-center gap-1">
                  <img
                    src={coin.item.small}
                    className="w-6 h-6 mr-1 rounded-full"
                    alt={coin.item.name}
                  />
                  <span className="text-white text-lg">{coin.item.name}</span>
                  <span className="text-[#8B8D98] text-sm">
                    {coin.item.symbol.toUpperCase()}
                  </span>
                </div>
                <div className="flex items-center justify-center gap-5">
                  <span className="text-[#8B8D98] text-[12px] pl-5">
                    ${parseFloat(coin.item.price_btc).toFixed(6)}
                  </span>
                  <span
                    className={`flex items-center gap-1 ${
                      coin.item.price_change_percentage_24h < 0
                        ? "text-red-400"
                        : "text-green-400"
                    }`}
                  >
                    {coin.item.price_change_percentage_24h < 0 ? (
                      <TrendingDown />
                    ) : (
                      <TrendingUp />
                    )}
                    {coin.item.price_change_percentage_24h}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingWidget;
