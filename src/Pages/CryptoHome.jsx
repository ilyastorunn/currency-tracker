import React from "react";
import Trending from "../Components/Trending";
import Markets from "../Components/Markets";

const CryptoHome = () => {
  return (
    <div className="wrapper-container">
      <Trending />
      <Markets />
    </div>
  );
};

export default CryptoHome;
