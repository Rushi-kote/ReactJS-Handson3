import "./App.css";
// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Componants/Home.jsx";
// import showComp from "./Componants/showComp";
import ShowComp from "./Componants/ShowComp.jsx";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/showFeedBack" element={<ShowComp />}></Route>
        {/* <Route path="/showFeedBack" element={<showComp />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
