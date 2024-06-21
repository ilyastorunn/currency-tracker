import React from "react";

const StockItem = ({ stock }) => {
  return (
    <div className="border p-4 rounded shadow bg-[#333340] text-white">
      <div className="flex items-center gap-4">
        <img
          className="w-10"
          src={`https://storage.googleapis.com/iex/api/logos/${stock.symbol}.png`}
          alt={stock.name}
        />
        <div>
          <h2 className="text-xl font-bold">{stock.name}</h2>
          <p className="text-gray-400">{stock.symbol}</p>
        </div>
      </div>
        <div className="mt-4">
          <p>Latest Price: ${stock.price}</p>
          <p>Change: {stock.change > 0 ? "+" : ""}{stock.change}</p>
          <p>Change Percent: {stock.changePercent}%</p>
        </div>
    </div>
  );
};

export default StockItem;
