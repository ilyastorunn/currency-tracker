import { FcGoogle } from "react-icons/fc";
import { IoClose } from "react-icons/io5";

export default function SignUp() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-black p-4">
        <a href="/">
          <IoClose
            className="absolute top-8 left-8 text-white cursor-pointer"
            size={24}
          />
        </a>
        <span className="flex flex-col items-center text-[32px] mb-16 capitalize bg-gradient-to-r from-grad-purple to-white text-transparent bg-clip-text">
          sign up to tracker
        </span>
        <div className="flex flex-col items-center">
          <div className="flex items-start gap-1">
            <input
              type="text"
              className="mt-5 pl-5 w-[140px] h-[38px] rounded-[50px] bg-[#222732] border-2 border-[#2F323B]"
              placeholder="first name"
            />
            <input
              type="text"
              className="mt-5 pl-5 w-[140px] h-[38px] rounded-[50px] bg-[#222732] border-2 border-[#2F323B]"
              placeholder="last name"
            />
          </div>
          <input
            type="text"
            className="mt-5 pl-5 w-[284px] h-[38px] rounded-[50px] bg-[#222732] border-2 border-[#2F323B]"
            placeholder="email"
          />
          <input
            type="text"
            className="mt-5 pl-5 w-[284px] h-[38px] rounded-[50px] bg-[#222732] border-2 border-[#2F323B]"
            placeholder="password"
          />
          <input
            type="text"
            className="mt-5 pl-5 w-[284px] h-[38px] rounded-[50px] bg-[#222732] border-2 border-[#2F323B]"
            placeholder="password"
          />
        </div>
        <div className="rounded-3xl p-0.5 bg-gradient-to-r from-grad-purple to-white mt-5 ">
          <button className="w-[106px] h-[24px] flex items-center justify-center px-7 py-3.5 rounded-[28px] text-white bg-[#000]">
            sign up
          </button>
        </div>
        <a href="#" className="flex items-end justify-center gap-2 mt-5">
          <FcGoogle className="flex flex-col items-center w-[16px] h-[16px]" />
          <p className="capitalize text-white text-[16px]">
            sign in with google
          </p>
        </a>
        <div className="flex items-center justify-center mt-80">
          <p className="text-[#868F97] mr-2">Don't have account yet?</p>
          <a href="/login" className="text-white">
            Sign in
          </a>
        </div>
      </div>
    </>
  );
}
