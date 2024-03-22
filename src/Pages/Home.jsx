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
    <div className="grid grid-cols-12 grid-rows-12 gap-6 m-6">
      <div className="col-span-4 row-span-6 border-2 rounded-[32px] border-indigo-500/50">
        <img className="w-[448px] h-[476px] rounded-[32px]" src={stockMarket} />
      </div>
      <div className="col-span-5 row-span-4 border-2 rounded-3xl border-indigo-500/50">
        <img className="w-[566px] h-[309px] rounded-[32px]" src={currencies} />
      </div>
      <div className="col-span-2 row-span-8 border-2 rounded-3xl border-indigo-500/50">
        <img class="w-[330px] h-[643px] rounded-[32px]" src={coinList} />
      </div>
      <div className="col-span-2 row-span-4 border-2 rounded-3xl border-indigo-500/50">
        <img class="w-[212px] h-[309px] rounded-[32px]" src={graph} />
      </div>
      <div className="col-span-3 row-span-4 border-2 rounded-3xl border-indigo-500/50">
        <img class="w-[330px] h-[309px] rounded-[32px]" src={cryptoAI} />
      </div>
      <div className="col-span-4 row-span-6 border-2 rounded-3xl border-indigo-500/50">
        <img class="w-[448px] h-[476px] rounded-[32px]" src={crypto} />
      </div>
      <div className="col-span-8 border-2 rounded-3xl border-indigo-500/50">
        
      </div>
    </div>
  );
}
