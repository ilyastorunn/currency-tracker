import React from "react";
import "../Styles/Home.css";
import stockMarket from "../pics/stockmarket.jpg";
import currencies from "../pics/currencies.jpg";
import coinList from "../pics/coinList.jpeg";
import compare from "../pics/compare.jpg";
import graph from "../pics/graph.jpg";
import crypto from "../pics/crypto.jpg";
import cryptoAI from "../pics/cryptoAI.jpeg";

export default function Home() {
  return (
    <div className="grid gap-4 grid-cols-12 m-2 h-screen">
      <div className="col-span-4 row-span-3 rounded-[32px] flex items-center justify-center overflow-hidden relative">
          <img className="w-full h-full object-cover" src={stockMarket} />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-[32px]">
            <p className="text-white text-[40px] font-medium font-['Oswald'] uppercase bg-transparent">
              take a look at <br /> stock market
            </p>
          </div>
      </div>
      <div className="bg-red-500 col-span-5 row-span-2 rounded-[32px] flex items-center justify-center overflow-hidden relative">
        <img className="w-full h-full object-cover" src={currencies} />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-[32px]">
          <p className="text-white text-[40px] font-medium font-['Oswald'] uppercase bg-transparent text-center">
            track currencies <br /> in real time
          </p>
        </div>
      </div>
      <div className="bg-red-500 col-span-3 row-span-4 rounded-[32px] flex items-center justify-center overflow-hidden relative">
        <img className="w-full h-full object-cover" src={coinList} />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-[32px]">
          <p className="text-white text-[40px] font-medium font-['Oswald'] uppercase bg-transparent text-center">
            follow your <br /> crypto <br /> currencies
          </p>
        </div>
      </div>
      <div className="bg-red-500 col-span-2 row-span-2 rounded-[32px] flex items-center justify-center overflow-hidden relative">
        <img className="w-full h-full object-cover" src={graph} />
      </div>
      <div className="bg-red-500 col-span-3 row-span-2 rounded-[32px] flex items-center justify-center overflow-hidden relative">
        <img className="w-full h-full object-cover" src={cryptoAI} />
      </div>
      <div className="bg-red-500 col-span-4 row-span-3 rounded-[32px] flex items-center justify-center overflow-hidden relative">
        <img className="w-full h-full object-cover" src={crypto} />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-[32px] flex-col">
          <p className="text-white text-[40px] font-medium font-['Oswald'] uppercase bg-transparent mb-20 text-center">
            your <br /> favorite <br /> currencies
          </p>
          <p className="text-white text-[40px] font-medium font-['Oswald'] uppercase bg-transparent">
            coming soon!
          </p>
        </div>
      </div>
      <div className="bg-red-500 col-span-8 row-span-2 rounded-[32px] flex items-center justify-center overflow-hidden relative">
        <img className="w-full h-full object-cover" src={compare} />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-[32px]">
          <p className="text-white text-[40px] font-medium font-['Oswald'] uppercase bg-transparent">
            compare your currencies
          </p>
        </div>
      </div>
    </div>
  );
}
