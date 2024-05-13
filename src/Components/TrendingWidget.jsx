import React from "react";

export default function () {
  return (
    <div className="trending flex flex-col items-start bg-[#333340] rounded-xl gap-2.5 py-4 px-10 ml-5">
      <h3 className="text-[#D4DBCD] text-2xl bg-[#333340]">Trending</h3>
      <div className="flex items-center gap-48 bg-[#333340]">
        <div className="flex items-center gap-6 bg-[#333340]">
          <h3 className="text-[#D4DBCD] text-lg bg-[#333340]">APU</h3>
          <p className="text-[#848E9C] text-xs bg-[#333340]">Apu Apustaja</p>
        </div>
        <p className="text-[#0ECB81] text-xs bg-[#333340]">+9.46%</p>
      </div>
    </div>
  );
}
