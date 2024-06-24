import WelcomeHeader from "../Components/WelcomeHeader";
import logo from "../pics/logo.svg";
import HomePage from "../pics/Home1.png";
import PersonalPage from "../pics/Home2.png";
import NewsPage from "../pics/News.png";
import Footer from "../Components/Footer";

function Home() {
  return (
    <>
      <WelcomeHeader />
      <div className="bg-black inline-flex-col items-center gap-30">
        <div className="flex flex-col items-center gap-7 pt-[120px]">
          <p className="text-[42px] text-white">
            Track Your Currencies Easily.
          </p>
          <button className="flex px-4 py-2 justify-center gap-10 items-center capitalize text-white border-2 border-[#35358B] rounded-[28px] bg-[#0B0B10] hover:text-black hover:bg-[#35358B]">
            Sign up for free!
          </button>
          <div className="mt-[120px]">
            <img
              src={logo}
              alt="Logo"
              className="w-[880px] h-[252px] mx-auto"
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-7 pt-[120px]">
          <p className="text-white text-[42px]">
            Check Out The Cryptocurrency You Want.
          </p>
          <p className="text-center text-white text-[18px]">
            Get an overview of your favorite currencies by effortlessly <br />{" "}
            examining real-time market data.
          </p>
          <div className="mt-[120px]">
            <img
              src={HomePage}
              alt="Home Page"
              className="w-[880px] h-[605px]"
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-7 pt-[120px]">
          <p className="text-white text-[42px]">Catch Up Trending Coins.</p>
          <p className="text-center text-white text-[18px]">
            Analyze the notable changes in the coins.
          </p>
          <div className="mt-[120px]">
            <img
              src={PersonalPage}
              alt="Personal Page"
              className="w-[880px] h-[605px]"
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-7 pt-[120px]">
          <p className="text-white text-[42px]">Follow daily news. 24/7.</p>
          <p className="text-center text-white text-[18px]">
            Follow daily news from our news section.
            <br /> Read, bookmark and take notes.
          </p>
          <div className="mt-[120px]">
            <img
              src={NewsPage}
              alt="News Page"
              className="w-[880px] h-[605px]"
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-[40px] m-[120px]">
          <p className="text-[42px] text-white">Make the right decision.</p>
          <p className="text-[20px] text-white">Try it now.</p>
          <button className="flex px-4 py-2 justify-center gap-10 items-center text-white border-2 border-[#35358B] rounded-[28px] bg-[#0B0B10] hover:text-black hover:bg-[#35358B]">
            SIGN UP
          </button>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
