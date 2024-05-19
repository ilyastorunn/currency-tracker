import React from "react";
import HistoryChart from "../Components/HistoryChart";
import CoinDetail from "../Components/CoinDetail";
import Converter from "../Components/Converter";
import TrendingWidget from "../Components/TrendingWidget";

const CryptoDetail = () => {
  return (
    <div className="wrapper-container mt-10">
      <div className="flex justify-center">
        <div className="flex flex-col gap-5 flex-1">
          <HistoryChart />
        </div>
        <div className="flex flex-col gap-5 ml-10 flex-1">
          <Converter />
          <TrendingWidget />
        </div>
      </div>
      <div className="mt-10">
        <CoinDetail />
      </div>
    </div>
  );
};

export default CryptoDetail;
