import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <img
          src="https://i.postimg.cc/jSFK8kBw/temp-Imagex-Jlx5r.jpg"
          className="app-logo"
          alt="logo"
        />
        <div class="game-text">
          Învață cu mine adunarea și scăderea
          <br></br>
          <span class="second-line">numerelor naturale de la 0 la 1000</span>
        </div>

        <img
          src="https://i.postimg.cc/13rkV7rV/temp-Imageo0j-Mhs.jpg"
          className="scooby-picture"
          alt="scooby-picture"
        />

        <button className="adunare" type="button">
          {" "}
          Adunare{" "}
        </button>
        <button className="scadere" type="button">
          {" "}
          Scădere{" "}
        </button>
        <button className="combinate" type="button">
          {" "}
          Operații combinate{" "}
        </button>
      </header>
    </div>
  );
}

export default App;
