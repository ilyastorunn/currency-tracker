import React from "react";
import Markets from "../Components/Markets";
import Header from "../Components/Header";

const CryptoHome = () => {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <Markets />
    </div>
  );
};

export default CryptoHome;
