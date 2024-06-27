import logo from "../pics/logo.svg";
import { CgProfile } from "react-icons/cg";

export default function Header() {
  return (
    <div className="bg-[#131217] py-7">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="website logo" className="w-[30px] h-[30px]" />
        </div>
        <div className="hidden md:flex items-center gap-[30px] text-[#868F97]">
          <span className="text-[20px]">Cryptocurrencies</span>
          <span className="text-[20px]">Search</span>
          <span className="text-[20px]">Read</span>
          <span className="text-[20px]">Portfolio</span>
          <span className="text-[20px]">Bookmarks</span>
        </div>
        <div className="flex items-center justify-center w-[30px] h-[30px] bg-zinc-800 rounded-full">
          <CgProfile className="text-[#868F97]" />
        </div>
      </div>
    </div>
  );
}