import logo from "../pics/logo.svg";
import { CiHome } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { PiReadCvLogoLight } from "react-icons/pi";
import { CiBookmark } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { CiSettings } from "react-icons/ci";

export default function HeaderVertical() {
  return (
    <div className="bg-[#17181D] py-7">
      <div className="container mx-auto flex items-center justify-between">
        <img src={logo} alt="website logo" className="w-[30px] h-[30px]" />
        <div className="flex items-center gap-[30px]">
          <a href="/home"><CiHome className="text-[#62676E] w-[24px] h-[24px]" /></a>
          <a href=""><CiSearch className="text-[#62676E] w-[24px] h-[24px]" /></a>
          <a href=""><PiReadCvLogoLight className="text-[#62676E] w-[24px] h-[24px]" /></a>
          <a href=""><CiBookmark className="text-[#62676E] w-[24px] h-[24px]" /></a>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex items-center justify-center w-[30px] h-[30px] bg-zinc-800 rounded-full">
            <a href=""><VscAccount className="text-[#62676E]" /></a>
          </div>
          <div className="flex items-center justify-center w-[30px] h-[30px] bg-zinc-800 rounded-full">
            <a href=""><CiSettings className="text-[#62676E]" /></a>
          </div>
        </div>
      </div>
    </div>
  );
}
