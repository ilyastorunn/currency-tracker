import React from "react";
import HistoryChart from "../Components/HistoryChart";
import CoinDetail from "../Components/CoinDetail";
import Header from "../Components/Header";

const CryptoDetail = () => {
    return (
        <div className="wrapper-container mt-10">
            {/* <Header /> */}
            <HistoryChart />
            {/* <CoinDetail /> */}
        </div>
    )
}

export default CryptoDetail;