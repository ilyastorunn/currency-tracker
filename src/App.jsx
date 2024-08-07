import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import CryptoDetail from "./Pages/CryptoDetail";
import CryptoHome from "./Pages/CryptoHome";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Contact from "./Pages/Contact";
import PersonalHome from "./Pages/PersonalHome";
import Trending from "./Components/Trending";
import Stock from "./Components/Stock";
// import News from "./Pages/News";
import NewsList from "./Components/NewsList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stock" element={<Stock />} />
        <Route path="/coin" element={<CryptoHome />} />
        <Route path="coin/:id" element={<CryptoDetail />} />
        <Route path="trending" element={<Trending/>} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="contact" element={<Contact />} />
        <Route path="home" element={<PersonalHome />} />
        {/* <Route path="news" element={<News />} /> */}
        <Route path="newslist" element={<NewsList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;