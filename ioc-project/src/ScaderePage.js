import React, { useState, useEffect } from "react";
import "./ScaderePage.css";

function ScaderePage() {
  const [numar1, setNumar1] = useState(0);
  const [numar2, setNumar2] = useState(0);
  const [rezultat, setRezultat] = useState("");
  const [rezultatCorect, setRezultatCorect] = useState(null);

  useEffect(() => {
    genereazaNumereRandom();
  }, []); // Se execută o singură dată la încărcarea componentei

  const genereazaNumereRandom = () => {
    const randomNumar1 = Math.floor(Math.random() * 1001);
    const randomNumar2 = Math.floor(Math.random() * randomNumar1);

    setNumar1(randomNumar1);
    setNumar2(randomNumar2);
    setRezultat("");
    setRezultatCorect(null); // Resetăm indicatorul de rezultat corect
  };

  const calculeazaRezultat = () => {
    const diferenta = numar1 - numar2;     

    setRezultat(diferenta.toString());
    // Verificăm dacă rezultatul este corect și setăm indicatorul
    setRezultatCorect(diferenta === parseInt(rezultat, 10)); //? true : null);
  };

  const handleVerifica = () => {
    calculeazaRezultat();
    if (rezultatCorect === true) {
      genereazaNumereRandom();
    }
    // else 
    // if(rezultatCorect === false)
    // {
    //   setRezultat("")
    // }
  };


  return (
    <div className="start">
    <div className="ScaderePage">
      <img
        src="https://i.postimg.cc/jSFK8kBw/temp-Imagex-Jlx5r.jpg"
        className="app-logo"
        alt="logo"
      />
      <img
        src="https://i.postimg.cc/13rkV7rV/temp-Imageo0j-Mhs.jpg"
        className="scooby-picture"
        alt="scooby-picture"
      />
      <h2>Scădere</h2>
      <p>
        Calculează diferența dintre următoarele două numere și scrie rezultatul.
      </p>
      </div>
      <div className="scadere-container">
      <div >
        <div className="numar-container">
          <strong>{numar1}</strong> -
        </div>
        <div className="numar-container">
          <strong>{numar2}</strong>
        </div>

        <div style={{ fontSize: '16px', fontWeight: 'bold', borderBottom: '10px solid #d7994e', width: '110px', display: 'inline-block'}}>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  	    </div>
      </div>
      
      <input
          type="number"
          value={rezultat}
          onChange={(e) => setRezultat(e.target.value)}
        />
        <button onClick={handleVerifica}>Verifică</button>
        {/* <button onClick={handleGenerareNoiNumere}>Generare noi numere</button> */}
        {rezultatCorect === true && (
          <div className="felicitari-container">
            <img
              src="https://i.redd.it/aahawy2st2d81.png"
              alt="Scooby Doo Zâmbitor"
              style={{ width: "100px", height: "100px" }}
            />
            <p className="pozamesaj">Felicitări!</p>
          </div>
        )}
        {rezultatCorect === false && (
          <div className="incearca-container">
            <img
              src="data:image/jpeg;base64,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"
              alt="Mesaj: Mai încearcă! Vei reuși!"
              style={{ width: "100px", height: "100px" }}
            />
            <p className="pozamesaj">Mai încearcă! Vei reuși!</p>
          </div>
        )}
      </div>
      </div>
  );
}

export default ScaderePage;
