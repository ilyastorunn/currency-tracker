import { useEffect, useState } from "react";
import axios from "axios";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/categories"
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="flex flex-col w-full max-w-[1056px] mx-auto">
      <div className="flex flex-col items-start gap-[10px] self-stretch rounded-[10px] bg-[#151419] p-4">
        <div className="flex w-full justify-between items-center">
          <span className="text-[#868F97] w-1/6">Category</span>
          <span className="text-[#868F97] w-1/6">Top Gainers</span>
          <span className="text-[#868F97] w-1/6 text-center">24h</span>
          <span className="text-[#868F97] w-1/6 text-center">Market Cap</span>
          <span className="text-[#868F97] w-1/6 text-center">24h Volume</span>
        </div>
      </div>
      <div className="bg-[#131419] rounded-[10px] p-4">
        <div className="flex flex-col gap-4">
          {categories.slice(0, 4).map((category) => (
            <div
              key={category.id}
              className="flex items-center justify-between p-2 border-[#2c2f36]"
            >
              <div className="flex items-center gap-2 flex-1">
                <span className="text-white text-lg">{category.name}</span>
              </div>
              <div className="flex items-center gap-2 flex-1">
                {category.top_3_coins.map((coin, index) => (
                  <img
                    key={index}
                    src={coin}
                    alt={`coin-${index}`}
                    className="w-6 h-6 rounded-full"
                  />
                ))}
              </div>
              <span
                className={`text-lg flex-1 text-center ${
                  category.market_cap_change_24h < 0
                    ? "text-red-400"
                    : "text-green-400"
                }`}
              >
                {category.market_cap_change_24h < 0 ? "▼" : "▲"}
                {Math.abs(category.market_cap_change_24h).toFixed(1)}%
              </span>
              <span className="text-white text-lg flex-1 text-right">
                ${category.market_cap.toLocaleString()}
              </span>
              <span className="text-white text-lg flex-1 text-right">
                ${category.volume_24h.toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
