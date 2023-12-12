import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import AdunarePage from './AdunarePage';
import ScaderePage from "./ScaderePage";

function App() {
  const navigate = useNavigate();

  const handleButtonClick = (ruta) => {
    navigate(ruta);
  };

  return (
    <div className="App">
      <header className="app-header">
        <img
          src="https://i.postimg.cc/jSFK8kBw/temp-Imagex-Jlx5r.jpg"
          className="app-logo"
          alt="logo"
        />
        <div className="game-text">
          Învață cu mine adunarea și scăderea
          <br />
          <span className="second-line">numerelor naturale de la 0 la 1000</span>
        </div>

        <img
          src="https://i.postimg.cc/13rkV7rV/temp-Imageo0j-Mhs.jpg"
          className="scooby-picture"
          alt="scooby-picture"
        />

        <div className="button-container">
          <button onClick={() => handleButtonClick("/adunare")}>Adunare</button>
          <button onClick={() => handleButtonClick("/scadere")}>Scădere</button>
          <button onClick={() => handleButtonClick("/combinate")}>Operații combinate</button>
        </div>
      </header>
    </div>
  );
}

export default App;
