import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import CryptoDetail from "./Pages/CryptoDetail";
import CryptoHome from "./Pages/CryptoHome";
import Trending from "./Components/Trending";
import Stock from "./Components/Stock";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stock" element={<Stock />} />
        <Route path="/coin" element={<CryptoHome />} />
        <Route path="coin/:id" element={<CryptoDetail />} />
        <Route path="trending" element={<Trending/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;