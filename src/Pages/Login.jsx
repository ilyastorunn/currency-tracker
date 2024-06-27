import { FcGoogle } from "react-icons/fc";
import { IoClose } from "react-icons/io5";

export default function Login() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-black p-4">
        <a href="/">
          <IoClose
            className="absolute top-8 left-8 text-white cursor-pointer"
            size={24}
          />
        </a>
        <div className="flex flex-col items-center gap-16">
          <p className="bg-gradient-to-r from-grad-purple to-white text-transparent bg-clip-text capitalize text-[32px]">
            login to tracker
          </p>
          <div className="flex flex-col items-center gap-5">
            <input
              type="text"
              className="pl-5 w-[284px] h-[38px] rounded-[50px] bg-[#222732] border-2 border-[#2F323B]"
              placeholder="account email"
            />
            <input
              type="text"
              className="mt-5 pl-5 w-[284px] h-[38px] rounded-[50px] bg-[#222732] border-2 border-[#2F323B]"
              placeholder="password"
            />
          </div>
          <div className="rounded-3xl p-0.5 bg-gradient-to-r from-grad-purple to-white ">
            <button className="w-[106px] h-[24px] flex items-center justify-center px-7 py-3.5 rounded-[28px] text-white bg-[#000]">
              sign in
            </button>
          </div>
          <a href="#" className="flex items-end justify-center gap-2">
            <FcGoogle className="flex flex-col items-center w-[16px] h-[16px]" />
            <p className="capitalize text-white text-[16px]">
              sign in with google
            </p>
          </a>
          <div className="flex items-center justify-center mt-80">
            <p className="text-[#868F97] mr-2">Don't have account yet?</p>
            <a href="/signup" className="text-white">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
