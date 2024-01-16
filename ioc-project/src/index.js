// index.js
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import AdunarePage from "./AdunarePage";
import ScaderePage from "./ScaderePage";
import CombinatePage from "./CombinatePage";
import Instructions from "./Instructions";
import ChooseMistery from "./ChooseMistery";
import CongratsPage from "./CongratsPage";

const Index = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/adunare" element={<AdunarePage />} />
        <Route path="/scadere" element={<ScaderePage />} />
        <Route path="/combinate" element={<CombinatePage />} />
        <Route path="/Instructions" element={<Instructions />} />
        <Route path="/ChooseMistery" element={<ChooseMistery />} />
        <Route path="/CongratsPage" element={<CongratsPage />} />
      </Routes>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Index />);
