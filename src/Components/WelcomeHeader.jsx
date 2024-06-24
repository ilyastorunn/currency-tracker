import logo from "../pics/logo.svg";

function WelcomeHeader() {
  return (
    <div className="bg-black">
      <div id="header" className="container mx-auto px-4 pt-10">
        <div className="text-white flex justify-between items-center py-4">
          <div className="flex items-center gap-10">
            <img src={logo} alt="logo" className="w-6 h-6" />
            <p className="text-base uppercase">Home</p>
            <p className="text-base uppercase">Contact</p>
          </div>
          <div className="flex items-center gap-9">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined">fingerprint</span>
              <p className="text-base uppercase">Login</p>
            </div>
            <div className="px-3.5 py-2 bg-indigo-900 rounded-[28px] justify-center items-center gap-2.5 inline-flex">
              <button className="uppercase text-sm font-normal">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeHeader;