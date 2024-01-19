import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const navigate = useNavigate();

  const handleSubtractionClick = (ruta) => {
    sessionStorage.setItem("operation", "/scadere");
    navigate(ruta);
  };

  const handleAddClick = (ruta) => {
    sessionStorage.setItem("operation", "/adunare");
    navigate(ruta);
  };

  const handleCombinedClick = (ruta) => {
    sessionStorage.setItem("operation", "/combinate");
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
          <span className="second-line">
            numerelor naturale de la 0 la 1000 și rezolvă misterul
          </span>
        </div>

        <img
          src="https://i.postimg.cc/m2D6jJR4/temp-Imagezc3-Lag.jpg"
          className="scooby-picture"
          alt="scooby-picture"
        />

        <div className="button-container">
          <button onClick={() => handleAddClick("/Instructions")}>
            Adunare
          </button>
          <button onClick={() => handleSubtractionClick("/Instructions")}>
            Scădere
          </button>
          <button onClick={() => handleCombinedClick("/Instructions")}>
            Adunare și scădere
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
