import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import Navbar from "./Component/Navbar";
import SDGPage from "./Pages/SDGPage";
import BusinessPage from "./Pages/BusinessPage";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/sdg" element={<SDGPage />} />
        <Route path="/business" element={<BusinessPage />} />
      </Routes>
    </>
  );
}

export default App;
