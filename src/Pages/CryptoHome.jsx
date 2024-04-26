import React from "react";
import Trending from "../Components/Trending";
import Markets from "../Components/Markets";
import Header from "../Components/Header";

const CryptoHome = () => {
  return (
    <div className="wrapper-container">
      {/* <Trending /> */}
      <Header />
      <Markets />
    </div>
  );
};

export default CryptoHome;
