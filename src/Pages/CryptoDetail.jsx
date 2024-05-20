import React from "react";
import HistoryChart from "../Components/HistoryChart";
import CoinDetail from "../Components/CoinDetail";
import Converter from "../Components/Converter";
import TrendingWidget from "../Components/TrendingWidget";

const CryptoDetail = () => {
  return (
    <div className="wrapper-container mt-10 px-10 flex flex-col">
      <div className="flex justify-center w-full">
        <div className="flex flex-col gap-5 w-1/2 pr-5">
          <HistoryChart />
        </div>
        <div className="flex flex-col gap-5 ml-10">
          <Converter />
          <TrendingWidget />
        </div>
      </div>
      <div className="mt-10 w-full flex justify-center">
        <CoinDetail />
      </div>
    </div>
  );
};

export default CryptoDetail;
