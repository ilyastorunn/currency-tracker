import { MdArrowOutward } from "react-icons/md";


export default function NewsWidget() {
  return (
    <div className="ml-1 w-[452px] h-[252px] bg-gradient-to-br from-emerald-400 to-zinc-950 rounded-[5px]">
      <div className="flex items-start gap-[10px] py-7 px-4">
        <div className="flex px-4 py-1 bg-[#d9d9d97d] rounded-[40px]">
          <span className="text-[16px] text-white">Check out</span>
          <span className="text-[16px] text-[#20503f] pl-[3px]">news</span>
        </div>
        <div className="flex items-center justify-center w-[30px] h-[30px] bg-[#d9d9d97d] rounded-full">
            <MdArrowOutward className="text-[#20503f]" />
        </div>
      </div>
      <div className="flex flex-col items-start px-4 pt-10 gap-4">
        <span className="text-[12px] text-[#20503f]">What's happening today</span>
        <span className="text-white">
            US jobless claims hit 5-week low at 211,000.
            <br /> Treasury yields were stable post weak inflation
            <br /> data reports, and UBS faces Swiss law challenges.
        </span>
      </div>
    </div>
  );
}
