import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./CombinatePage.css";

function CombinatePage() {
  const [numar1Adunare, setNumar1Adunare] = useState(0);
  const [numar2Adunare, setNumar2Adunare] = useState(0);
  const [numar1Scadere, setNumar1Scadere] = useState(0);
  const [numar2Scadere, setNumar2Scadere] = useState(0);
  const [incercari, setIncercari] = useState(0);
  const [rezultat, setRezultat] = useState("");
  const [rezultatCorect, setRezultatCorect] = useState(0);
  const [operatie, setOperatie] = useState(""); // Adunare sau Scadere
  const navigate = useNavigate();
  const [afiseazaFelicitari, setAfiseazaFelicitari] = useState(false);
  const [index, setIndex] = useState(0);

  const [nr1, setNr1] = useState("");
  const [nr2, setNr2] = useState("");

  var listaString = sessionStorage.getItem("mister");
  const listaElemente = JSON.parse(listaString);

  useEffect(() => {
    genereazaOperatieRandom();
    schimbaElement();
    setIndex(index + 1);
  }, []);

  const genereazaOperatieRandom = () => {
    const randomOperatie = Math.random() < 0.5 ? "adunare" : "scadere";
    setOperatie(randomOperatie);
    genereazaNumereRandom(randomOperatie);
  };

  function schimbaElement() {
    const mesajElement = document.getElementById("message");
    if (mesajElement) {
      if (index < listaElemente.length) {
        const [mesaj, calePoza] = listaElemente[index];
        mesajElement.innerText = mesaj;
        document.getElementById("game-photo").src = calePoza;
      } else {
        sessionStorage.setItem("mister", JSON.stringify(listaElemente));
        sessionStorage.setItem("operation", "/combinate");
        navigate("/CongratsPage");
      }
    } else {
      console.error("Elementul cu id-ul 'mesaj' nu a fost găsit.");
    }
  }

  const genereazaNumereRandom = (operatie) => {
    let randomNumar1, randomNumar2;

    if (operatie == "adunare") {
      do {
        randomNumar1 = Math.floor(Math.random() * 1000);
        randomNumar2 = Math.floor(Math.random() * randomNumar1);
      } while (randomNumar1 + randomNumar2 > 1000);
      setNumar1Adunare(randomNumar1);
      setNumar2Adunare(randomNumar2);
      setRezultatCorect(numar1Adunare + numar2Adunare);
    }

    if (operatie === "scadere") {
      randomNumar1 = Math.floor(Math.random() * 1000);
      randomNumar2 = Math.floor(Math.random() * randomNumar1);
      setNumar1Scadere(randomNumar1);
      setNumar2Scadere(randomNumar2);
      setRezultatCorect(numar1Scadere - numar2Scadere);
    }

    let formattedNr1, formattedNr2;

    formattedNr1 = adaugaSpatii(String(randomNumar1));
    formattedNr2 = adaugaSpatii(String(randomNumar2));

    setNr1(formattedNr1);
    setNr2(formattedNr2);

    setIncercari(0);
    setRezultat("");
    setAfiseazaFelicitari(false);
  };

  const navigateToStartPage = () => {
    navigate("/");
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
    const rezultatCalculat =
      operatie === "adunare"
        ? numar1Adunare + numar2Adunare
        : numar1Scadere - numar2Scadere;
    setIncercari(incercari + 1);
    console.log(rezultat);
    console.log(rezultatCalculat);
    console.log(incercari);
    console.log(afiseazaFelicitari);

    if (parseInt(rezultat, 10) === rezultatCalculat) {
      setAfiseazaFelicitari(true);
      genereazaOperatieRandom();
      schimbaElement();
      setIndex(index + 1);
    }
  };

  const handleVerifica = () => {
    calculeazaRezultat();
  };

  return (
    <div className="start1">
      <div className="CombinatePage">
        <img
          src="https://i.postimg.cc/jSFK8kBw/temp-Imagex-Jlx5r.jpg"
          className="app-logo"
          alt="logo"
        />

        <p id="message" className="message-green"></p>

        <div className="numere-container">
          <div className="content-container">
            <div className="align-left">
              <div className="numar">
                <strong>{operatie === "adunare" ? nr1 : nr1}</strong>
                <strong>{operatie === "adunare" ? "+" : "-"} </strong>
              </div>
              <div className="numar">
                <strong>{operatie === "adunare" ? nr2 : nr2} </strong>
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
      {parseInt(rezultat, 10) !== rezultatCorect &&
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

export default CombinatePage;
