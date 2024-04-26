import React from "react";
import { Link } from "react-router-dom";

const CoinTrending = ({ coin }) => {
  return (
    <Link to={`/coin/${coin.id}`}>
    <div className="font-light mb-2 p-2  hover:bg-gray-200">
      <div className="flex items-center justify-center gap-1">
        <img className="w-6" src={coin.small} alt={coin.name} />
        <p className="text-[#eaecef]">{coin.name}</p>
        <small className="text-xs text-[#848e9c]">({coin.symbol})</small>
      </div>
    </div>
    </Link>
  );
};

export default CoinTrending;
