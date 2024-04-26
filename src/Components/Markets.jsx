import React from "react";
import useAxios from "../hooks/useAxios";
import Coin from "./Coin";
import Skeleton from "./Skeleton";

const Markets = () => {
  const { response, loading } = useAxios(
    "coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
  );

  if (loading) {
    return (
      <div className="wrapper-container mt-8">
        <Skeleton className="h-8 w-32" />
        <Skeleton className="h-8 w-full mt-2" />
        <Skeleton className="h-8 w-full mt-2" />
        <Skeleton className="h-8 w-full mt-2" />
        <Skeleton className="h-8 w-full mt-2" />
        <Skeleton className="h-8 w-full mt-2" />
        <Skeleton className="h-8 w-full mt-2" />
        <Skeleton className="h-8 w-full mt-2" />
      </div>
    );
  }

  return (
    <section className="mt-8 m-10">
      <div className="grid grid-cols-4 sm:grid-cols-4 p-2 text-sm text-[#848E9C]">
        <p>Name</p>
        <p>Price</p>
        <p>Change</p>
        <p>Value</p>
      </div>
      {response && response.map((coin) => <Coin key={coin.id} coin={coin} />)}
    </section>
  );
};

export default Markets;
