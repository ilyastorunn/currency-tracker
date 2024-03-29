import React from "react";

export default function Header() {
  return (
    <div className="inline-flex flex-col px-24 py-5 border-solid border-2 border-[#191A1F] rounded-[32px] bg-[#191A1F]">
      <div className="flex items-start gap-9 uppercase text-xl font-medium text-white bg-[#191A1F]">
        <div className="bg-[#191A1F]">home</div>
        <div className="bg-[#191A1F]">stock</div>
        <div className="bg-[#191A1F]">currencies</div>
        <div className="bg-[#191A1F]">crypto</div>
        <div className="bg-[#191A1F]">contact</div>
      </div>
    </div>
  );
}
