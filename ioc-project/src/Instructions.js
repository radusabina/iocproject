import React from "react";
import { useNavigate } from "react-router-dom";
import "./Instructions.css";

function Instructions() {
  const navigate = useNavigate();

  const handleButtonClick = (ruta) => {
    navigate(ruta);
  };

  return (
    <div className="start">
      <header className="app-header">
        <img
          src="https://i.postimg.cc/jSFK8kBw/temp-Imagex-Jlx5r.jpg"
          className="app-logo"
          alt="logo"
        />
        <div className="game-text">
          Pentru a ajuta echipa să rezolve misterul
          <br />
          <span className="second-line">
            trebuie să răspunzi corect la întrebările de matematică
          </span>
        </div>

        <img
          src="https://i.postimg.cc/GtKC0T7f/temp-Image0-C9-XKX.jpg"
          className="scooby-picture"
          alt="scooby-picture"
        />

        <div className="button-container">
          <button onClick={() => handleButtonClick("/ChooseMistery")}>
            Am înțeles
          </button>
        </div>
      </header>
    </div>
  );
}

export default Instructions;
