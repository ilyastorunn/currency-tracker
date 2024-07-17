import HeaderVertical from "../Components/HeaderVertical";
import MarketCap from "../Components/MarketCap";
import NewsWidget from "../Components/NewsWidget";
import TrendingWidget from "../Components/TrendingWidget";

export default function PersonalHome() {
  return (
    <>
      <HeaderVertical />
      <div className="container mx-auto flex flex-col items-center min-h-screen bg-[#1A1B20]">
        <div className="flex flex-col items-center w-full max-w-[1200px] flex-1 justify-center gap-9">
          <div className="flex flex-row justify-between gap-6 w-full">
            <NewsWidget />
            <TrendingWidget />
          </div>
        </div>
        <div className="w-full flex flex-col items-center pb-9">
          <div className="w-full max-w-[1200px]">
            <a href="#"><span className="text-[20px] text-white mb-4 block">Cryptocurrency Prices by Market Cap</span></a>
            <MarketCap className="w-full" />
          </div>
        </div>
      </div>
    </>
  );
}