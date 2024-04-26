import React from "react";
import { currencyFormat } from "../utils";
import { TrendingDown, TrendingUp } from "../icons/icons";
import { Link } from "react-router-dom";

const Coin = ({ coin }) => {
  return (
    <Link to={`/coin/${coin.id}`} style={{ textDecoration: 'none' }}>
      <div className="grid grid-cols-4 sm:grid.cols-4 font-light p-2 m-10">
        <div className="flex items-center gap-1 w-full">
          <img className="w-6 mr-1" src={coin.image} alt={coin.name} />
          <p className="text-white text-xl">{coin.name}</p>
          <span className="text-lg text-[#848E9C]">({coin.symbol})</span>
        </div>
        <span className="w-full text-white text-xl">
          {currencyFormat(coin.current_price)}
        </span>
        <span
          className={`flex gap-1 ${
            coin.price_change_percentage_24h < 0
              ? "text-red-400"
              : "text-green-400"
          }`}
        >
          {coin.price_change_percentage_24h < 0 ? (
            <TrendingDown />
          ) : (
            <TrendingUp />
          )}
          {coin.price_change_percentage_24h}
        </span>
        <div className="hidden sm:block">
          <span className="text-white text-xl">
            {currencyFormat(coin.market_cap)}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Coin;
