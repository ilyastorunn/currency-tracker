import React, { useEffect, useState } from "react";
import axios from "axios";
import { TrendingDown, TrendingUp } from "../icons/icons";
import { Link } from "react-router-dom";
import { currencyFormat } from "../utils";

const TrendingWidget = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/search/trending"
        );
        setTrendingCoins(response.data.coins.slice(0, 3));
      } catch (error) {
        console.error("Error fetching trending coins:", error);
      }
    };

    fetchTrendingCoins();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <div className="converter flex flex-col items-center gap-4 bg-[#333340] rounded-xl ml-5 p-4">
        <h3 className="text-[#D4DBCD] text-2xl">Trending</h3>
        <div className="flex flex-col items-start px-4 py-3 rounded-[10px] bg-[#333340] w-full">
          {trendingCoins.map((coin) => (
            <Link to={`/coin/${coin.item.id}`} key={coin.item.id} style={{ textDecoration: 'none' }}>
              <div className="flex items-center justify-between border border-[#1E1E1E] rounded-[10px] p-2 bg-[#44445A] w-full mb-2">
                <div className="flex items-center gap-1">
                  <img className="w-6 mr-1" src={coin.item.small} alt={coin.item.name} />
                  <p className="text-white text-xl">{coin.item.name}</p>
                  <span className="text-lg text-[#848E9C]">({coin.item.symbol.toUpperCase()})</span>
                </div>
                <span className="text-white text-xl">
                  {currencyFormat(coin.item.price_btc)}
                </span>
                <span
                  className={`flex gap-1 ${
                    coin.item.price_change_percentage_24h < 0
                      ? 'text-red-400'
                      : 'text-green-400'
                  }`}
                >
                  {coin.item.price_change_percentage_24h < 0 ? (
                    <TrendingDown />
                  ) : (
                    <TrendingUp />
                  )}
                  {coin.item.price_change_percentage_24h}%
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingWidget;
