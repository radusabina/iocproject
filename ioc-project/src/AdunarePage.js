import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AdunarePage.css";

function AdunarePage() {
  const [numar1, setNumar1] = useState(0);
  const [numar2, setNumar2] = useState(0);
  const [rezultat, setRezultat] = useState("");
  const [incercari, setIncercari] = useState(0);
  const [nr1, setNr1] = useState("");
  const [nr2, setNr2] = useState("");
  const [afiseazaFelicitari, setAfiseazaFelicitari] = useState(false);
  const navigate = useNavigate();

  var listaString = sessionStorage.getItem("mister");
  const listaElemente = JSON.parse(listaString);

  const [index, setIndex] = useState(0);

  function schimbaElement() {
    const mesajElement = document.getElementById("message");
    const videoElement = document.getElementById("game-video");
    const photoElement = document.getElementById("game-photo");

    if (mesajElement && videoElement && photoElement) {
      if (index < listaElemente.length) {
        const [mesaj, calePoza, caleVideo] = listaElemente[index];
        mesajElement.innerText = mesaj;

        // Verifica dacă există o cale video și imaginea
        if (caleVideo && videoElement) {
          // Elimina imaginea și actualizeaza sursa video
          photoElement.style.display = "none";
          videoElement.style.display = "block";
          videoElement.src = caleVideo;
        } else if (calePoza && photoElement) {
          // Elimina videoul și actualizeaza sursa foto
          videoElement.style.display = "none";
          photoElement.style.display = "block";
          photoElement.src = calePoza;
        }
      } else {
        sessionStorage.setItem("mister", JSON.stringify(listaElemente));
        sessionStorage.setItem("operation", "/adunare");
        navigate("/CongratsPage");
      }
    } else {
      console.error("Elementele nu au fost găsite.");
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

    let formattedNr1, formattedNr2;

    formattedNr1 = adaugaSpatii(String(randomNumar1));
    formattedNr2 = adaugaSpatii(String(randomNumar2));

    setNr1(formattedNr1);
    setNr2(formattedNr2);

    setNumar1(randomNumar1);
    setNumar2(randomNumar2);
    setRezultat("");
    setIncercari(0);
    setAfiseazaFelicitari(false);
  };

  function adaugaSpatii(string) {
    if (string.length === 2) {
      string = " " + string;
      string = " " + string;
    }
    if (string.length === 1) {
      string = " " + string;
      string = " " + string;
      string = " " + string;
      string = " " + string;
    }

    return string;
  }

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
                <strong>{nr1}</strong> +
              </div>
              <div className="numar">
                <strong>{nr2}</strong>
              </div>

              <input
                type="number"
                value={rezultat}
                onChange={(e) => setRezultat(e.target.value)}
              />
              <button onClick={handleVerifica}>Verifică</button>
            </div>
            <img className="game-photo" id="game-photo" />
            <iframe
              id="game-video"
              className="game-video"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      {parseInt(rezultat, 10) !== numar1 + numar2 &&
        incercari > 0 &&
        !afiseazaFelicitari && (
          <div className="incearca-container">
            <div className="mai-incearca">Mai încearcă, vei reuși!</div>
          </div>
        )}
      <button className="go-to-start-button" onClick={navigateToStartPage}>
        înapoi
      </button>
    </div>
  );
}

export default AdunarePage;
