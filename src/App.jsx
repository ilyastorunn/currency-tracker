import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import CryptoDetail from "./Pages/CryptoDetail";
import CryptoHome from "./Pages/CryptoHome";
import Trending from "./Components/Trending";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<CryptoHome />} />
        <Route path="coin/:id" element={<CryptoDetail />} />
        <Route path="trending" element={<Trending/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
