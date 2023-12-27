import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AdunarePage.css";

function AdunarePage() {
  const [numar1, setNumar1] = useState(0);
  const [numar2, setNumar2] = useState(0);
  const [rezultat, setRezultat] = useState("");
  const [incercari, setIncercari] = useState(0);
  const [afiseazaFelicitari, setAfiseazaFelicitari] = useState(false);
  const navigate = useNavigate();

  var listaString = sessionStorage.getItem("mister");
  const listaElemente = JSON.parse(listaString);

  const [index, setIndex] = useState(0);

  function schimbaElement() {
    const mesajElement = document.getElementById("message");
    if (mesajElement) {
      if (index < listaElemente.length) {
        const [mesaj, calePoza] = listaElemente[index];
        mesajElement.innerText = mesaj;
        document.getElementById("game-photo").src = calePoza;
      } else {
        navigate("/FinishPage");
      }
    } else {
      console.error("Elementul cu id-ul 'mesaj' nu a fost găsit.");
    }
  }

  const navigateToStartPage = () => {
    navigate("/");
  };

  useEffect(() => {
    genereazaNumereRandom();
    schimbaElement();
    setIndex(index + 1);
  }, []);

  const genereazaNumereRandom = () => {
    let randomNumar1, randomNumar2;

    do {
      randomNumar1 = Math.floor(Math.random() * 1000);
      randomNumar2 = Math.floor(Math.random() * randomNumar1);
    } while (randomNumar1 + randomNumar2 > 1000);

    setNumar1(randomNumar1);
    setNumar2(randomNumar2);
    setRezultat("");
    setIncercari(0);
    setAfiseazaFelicitari(false);
  };

  const calculeazaRezultat = () => {
    const suma = numar1 + numar2;
    setIncercari(incercari + 1);

    if (parseInt(rezultat, 10) === suma) {
      setAfiseazaFelicitari(true);
      genereazaNumereRandom();
      schimbaElement();
      setIndex(index + 1);
    }
  };

  const handleVerifica = () => {
    calculeazaRezultat();
  };

  return (
    <div className="start1">
      <div className="AdunarePage">
        <img
          src="https://i.postimg.cc/jSFK8kBw/temp-Imagex-Jlx5r.jpg"
          className="app-logo"
          alt="logo"
        />

        <p id="message" className="message"></p>

        <div className="numere-container">
          <div className="content-container">
            <div className="align-left">
              <div className="numar">
                <strong1>{numar1}</strong1> +
              </div>
              <div className="numar">
                <strong1>{numar2}</strong1>
              </div>

              <input
                type="number"
                value={rezultat}
                onChange={(e) => setRezultat(e.target.value)}
              />
              <button onClick={handleVerifica}>Verifică</button>
            </div>
            <img className="game-photo" id="game-photo" />
          </div>
        </div>
      </div>
      {parseInt(rezultat, 10) !== numar1 + numar2 &&
        incercari > 0 &&
        !afiseazaFelicitari && (
          <div className="incearca-container">
            <div className="mesaj-eroare">
              <p>Mai încearcă! Vei reuși!</p>
            </div>
          </div>
        )}
      <button className="go-to-start-button" onClick={navigateToStartPage}>
        înapoi
      </button>
    </div>
  );
}

export default AdunarePage;
