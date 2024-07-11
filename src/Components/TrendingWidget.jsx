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
    <div className="flex w-[584px] h-[252px] px-[68px] py-[42px] flex-col items-start gap-[10px] rounded-[5px] bg-[#131419]">
      <span className="text-[18px] text-white mb-5">Trending</span>
      <div className="flex w-full h-full items-start gap-7">
        <div className="flex flex-col items-start gap-7 w-1/2">
          {firstColumnCoins.map((coin) => (
            <Link
              to={`/coin/${coin.item.id}`}
              key={coin.item.id}
              style={{ textDecoration: "none" }}
            >
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center gap-1">
                  <img
                    src={coin.item.small}
                    className="w-[16px] h-[16px] mr-1 rounded-full"
                    alt={coin.item.name}
                  />
                  <span className="text-white">{coin.item.name}</span>
                  <span className="text-[#8B8D98] text-[14px]">
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
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center gap-1">
                  <img
                    src={coin.item.small}
                    className="w-[16px] h-[16px] mr-1 rounded-full"
                    alt={coin.item.name}
                  />
                  <span className="text-white">{coin.item.name}</span>
                  <span className="text-[#8B8D98] text-[14px]">
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
    // <div className="flex flex-col items-center justify-center gap-8">
    //   <div className="flex flex-col items-center gap-4 bg-[#333340] rounded-[5px] p-4">
    //     <h3 className="text-white text-[18px]">Trending</h3>
    //     <div className="flex w-full gap-4">
    //       <div className="flex flex-col w-1/2">
    //         {firstColumnCoins.map((coin) => (
    //           <Link
    //             className="bg-[#333340]"
    //             to={`/coin/${coin.item.id}`}
    //             key={coin.item.id}
    //             style={{ textDecoration: "none" }}
    //           >
    //             <div className="flex items-center justify-between p-2 bg-[#333340] w-full mb-2 pl-16">
    //               <div className="flex items-center gap-2 bg-[#333340]">
    //                 <img
    //                   className="w-[16px] h-[16px] mr-1 rounded-full"
    //                   src={coin.item.small}
    //                   alt={coin.item.name}
    //                 />
    //                 <p className="text-white text-[12px]">{coin.item.name}</p>
    //                 <span className="text-[10px] text-[#868F97]">
    //                   ({coin.item.symbol.toUpperCase()})
    //                 </span>
    //               </div>
    //               <span className="text-[#8B8D98] text-[10px]">
    //                 {currencyFormat(coin.item.price_btc)}
    //               </span>
    //  <span
    //    className={`flex items-center gap-1 ${
    //      coin.item.price_change_percentage_24h < 0
    //        ? "text-red-400"
    //        : "text-green-400"
    //    }`}
    //  >
    //    {coin.item.price_change_percentage_24h < 0 ? (
    //      <TrendingDown />
    //    ) : (
    //      <TrendingUp />
    //    )}
    //    {coin.item.price_change_percentage_24h}
    //  </span>
    //             </div>
    //           </Link>
    //         ))}
    //       </div>
    //       <div className="flex flex-col w-1/2">
    //         {secondColumnCoins.map((coin) => (
    //           <Link
    //             className="bg-[#333340]"
    //             to={`/coin/${coin.item.id}`}
    //             key={coin.item.id}
    //             style={{ textDecoration: "none" }}
    //           >
    //             <div className="flex items-center justify-between p-2 w-full mb-2 pr-16">
    //               <div className="flex items-center gap-2 bg-[#333340]">
    //                 <img
    //                   className="w-[16px] h-[16px] mr-1 rounded-full"
    //                   src={coin.item.small}
    //                   alt={coin.item.name}
    //                 />
    //                 <p className="text-white text-[12px]">
    //                   {coin.item.name}
    //                 </p>
    //                 <span className="text-[10px] text-[#868F97]">
    //                   ({coin.item.symbol.toUpperCase()})
    //                 </span>
    //               </div>
    //               <span className="text-[#8B8D98] text-[10px]">
    //                 {currencyFormat(coin.item.price_btc)}
    //               </span>
    //               <span
    //                 className={`flex items-center gap-1 ${
    //                   coin.item.price_change_percentage_24h < 0
    //                     ? "text-red-400"
    //                     : "text-green-400"
    //                 }`}
    //               >
    //                 {coin.item.price_change_percentage_24h < 0 ? (
    //                   <TrendingDown />
    //                 ) : (
    //                   <TrendingUp />
    //                 )}
    //                 {coin.item.price_change_percentage_24h}
    //               </span>
    //             </div>
    //           </Link>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default TrendingWidget;
