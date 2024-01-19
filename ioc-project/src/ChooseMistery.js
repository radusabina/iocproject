import React from "react";
import { useNavigate } from "react-router-dom";
import "./ChooseMistery.css";

function ChooseMistery() {
  var operation = sessionStorage.getItem("operation");

  const misteryAloha = [
    [
      "Echipa misterelor ajunge pe plajele însorite din Hawaii pentru un cunoscut concurs de surf.",
      "https://i.postimg.cc/NFhdHdX9/temp-Image0-Shus-U.jpg",
    ],
    [
      "În timp ce își cumpărau un totem Wiki-Tiki, află de la cel mai bun surfer al insulei că o fată, Snookie, a fost răpită de Wiki-Tiki.",
      "https://i.postimg.cc/mkYWzzP4/temp-Imagewwk-OTV.jpg",
    ],
    [
      "Seara, se strâng cu toții la petrecerea de pe plajă.",
      "https://i.postimg.cc/QxM3mqn9/temp-Imagef-Nnu8-T.jpg",
    ],
    [
      "Petrecerea este întreruptă de micii Wiki-Tiki. După ce se retrag, gașca lui Scooby-Doo decide să rezolve misterul.",
      "https://i.postimg.cc/CLJKL19D/temp-Imageknq-Lj-P.jpg",
    ],
    [
      "Următoarea zi, pornesc prin junglă spre vulcan și reușesc să mai adune câteva indicii pe drum.",
      "https://i.postimg.cc/W3fnvTTP/temp-Image-Dca-B3i.jpg",
    ],
    [
      "În interiorul vulcanului, se întâlnesc cu Wiki-Tiki, însă reușesc să scape și să o salveze pe Snookie.",
      "https://i.postimg.cc/vTt5mydB/temp-Image48pti4.jpg",
    ],
    [
      "În timp ce încearcă să iasă din vulcan, echipa misterelor se întâlnește cu foarte mulți șerpi. Reușesc să treacă de aceștia datorită cântecului la mandolină al lui Shaggy.",
      "https://i.postimg.cc/bYnZ9pWS/temp-Image0-ZOw55.jpg",
    ],
    [
      "Următoarea zi, la concursul de surf, apare Wiki-Tiki din nou, însă este prins de un val și adus la mal.",
      "https://i.postimg.cc/3J4C5skg/temp-Image-Ye4y6n.jpg",
    ],
    [
      "Echipa misterelor dezvăluie că Wiki-Tiki era cel mai bun surfer de pe insulă, care își dorea să sperie localnicii pentru a cumpăra casele lor la un preț mic.",
      "https://i.postimg.cc/PqRYRKd6/temp-Imagel-UHqns.jpg",
    ],
    [
      "Scooby-Doo câștigă concursul de surf, iar gașca se bucură în liniște de vacanță.",
      "https://i.postimg.cc/1t15XNBm/temp-Imagevq-Wc6-G.jpg",
    ],
  ];

  const misteryLochNess = [
    [
      "Scooby-Doo și echipa Misterelor merg la Loch Ness în Scoția să o viziteze pe verișoara lui Daphne la faimosul castel Blake.",
      "https://i.postimg.cc/v8N3B6cT/temp-Image-Kbzorl.jpg",
    ],
    [
      "Seara, Scooby-Doo și Shaggy merg să caute bucătăria pentru o gustare târzie.",
      "https://i.postimg.cc/QMkbmYBm/temp-Image-YUcb-DK.jpg",
    ],
    [
      "Ei sunt atacați de monstrul din Loch Ness, iar gașca decide să rezolve misterul.",
      "https://i.postimg.cc/fTdDLYSZ/temp-Imagem27-WDc.jpg",
    ],
    [
      "Ajutați de verișoara lui Daphne, echipa ia un submarin și merge în mare pentru a căuta indicii.",
      "https://i.postimg.cc/1tHZxZtj/temp-Image-Ao5-RWb.jpg",
    ],
    [
      "Seara, merg în pădure pentru a găsi mai multe urme ale monstrului din Loch Ness și pun la cale un plan.",
      "https://i.postimg.cc/pL4jjwP4/temp-Image-Fh-RXh-Y.jpg",
    ],
    [
      "Următoarea seară, se folosesc de Scooby-Doo și Shaggy ca momeală pentru a ademeni monstrul.",
      "https://i.postimg.cc/hGNNHtcs/temp-Imagev-CIu1g.jpg",
    ],
    [
      "Reușesc să prindă monstrul și află că erau frații Haggart, care voiau să facă o farsă.",
      "https://i.postimg.cc/fyVCZxC0/temp-Imagef-NC4lz.jpg",
    ],
  ];

  const misteryHauntedHolidays = [
    [
      "Scooby-Doo și echipa misterelor decid să petreacă Crăciunul la unchiul lui Daphne, care are un magazin de jucării.",
      "https://i.postimg.cc/Gt9ssHZH/temp-Imageq-HM4-MD.jpg",
    ],
    [
      "Toată lumea se bucură de sărbători, dar atmosfera festivă este întreruptă de apariția unui om de zăpadă ciudat.",
      "https://i.postimg.cc/ht8hvLf2/temp-Imageu-Pk-Bv-R.jpg",
    ],
    [
      "Cei cinci prieteni hotărăsc să investigheze misterul pentru a restabili spiritul Crăciunului.",
      "https://i.postimg.cc/NFT2xWjc/temp-Image-To9-FIo.jpg",
    ],
    [
      "Ei intră în conacul înghețat, unde se despart pentru a căuta indicii.",
      "https://i.postimg.cc/fbL3P3R5/temp-Imagec-Xy-Pm4.jpg",
    ],
    [
      "Aceștia sunt găsiți de omul de zăpadă și încearcă să fugă din conac.",
      "https://i.postimg.cc/qMz5pwZd/temp-Imagewgz-M6d.jpg",
    ],
    [
      "Gășca se întoarce în magazinul de jucării și își face un plan pentru a prinde omul de zăpadă malefic.",
      "https://i.postimg.cc/44wDfmfp/temp-Imagezu-ZE99.jpg",
    ],
    [
      "Împreună, reușesc să prindă omul de zăpadă în turnul cu ceas al orașului.",
      "https://i.postimg.cc/FH0GKByw/temp-Imagemsya-HC.jpg",
    ],
    [
      "Omul de zăpadă era fiul unchiului lui Daphne, care dorea să strice afacerea familiei deoarece voia să-și deschidă propriul magazin. El este dus la poliție.",
      "https://i.postimg.cc/7hpMH3fx/temp-Imagev-N22-ZL.jpg",
    ],
    [
      "După rezolvarea misterului, gașca se întoarce la planurile inițiale pentru a sărbători Crăciunul împreună, restabilind spiritul festiv.",
      "https://i.postimg.cc/0Qjp7WSk/temp-Imagel-MX82u.jpg",
    ],
  ];

  const misteryPiratesAhoy = [
    [
      "Scooby-Doo și echipa misterelor pleacă într-o croazieră împreună cu familia lui Fred pentru a sărbători ziua lui de naștere.",
      "https://i.postimg.cc/gj2p7bGh/temp-Imageg-JGub-U.jpg",
    ],
    [
      "Seara la cină, apare un magician pe nume Mister Mysterio care face trucuri, însă numărul său este întrerupt de o ceață densă.",
      "https://i.postimg.cc/BQW9DFKD/temp-Image-X62a-XH.jpg",
    ],
    [
      "Din ceață apare o gașcă de pirați care sperie pe toată lumea. Echipa misterelor reușește să scape, însă toți ceilalți pasageri ai navei au dispărut.",
      "https://i.postimg.cc/HsCSt9sw/temp-Imageg-FS8i-J.jpg",
    ],
    [
      "Echipa misterelor pleacă pe urmele piraților.",
      "https://i.postimg.cc/dQfHTcgx/temp-Image459-T6-Y.jpg",
    ],
    [
      "Aceștia se întâlnesc cu pirații, dar sunt atacați, iar barca echipei misterelor se scufundă.",
      "https://i.postimg.cc/pLNhdjFy/temp-Image-Nthni-Z.jpg",
    ],
    [
      "Gașca ajunge pe o insulă pe care încep să o exploreze. Intră într-o peșteră și găsesc un nou vapor.",
      "https://i.postimg.cc/6QPTDGt9/temp-Image7cb-Fqa.jpg",
    ],
    [
      "Echipa misterelor este prinsă de pirați, însă într-un moment de neatenție al acestora, reușesc să se elibereze și să se retragă în interiorul bărcii.",
      "https://i.postimg.cc/V6kd7cty/temp-Image4-RD7-Sf.jpg",
    ],
    [
      "Ei își fac un plan ingenios și reușesc să îi înfrângă pe pirați.",
      "https://i.postimg.cc/mkxhT1q4/temp-Imagecdcubh.jpg",
    ],
    [
      "În spatele planului se află magicianul Mister Mysterio, care încerca să se folosească de pirați pentru a ajunge la comoara mărilor.",
      "https://i.postimg.cc/KzWBBYHp/temp-Image-Jun-SUj.jpg",
    ],
  ];

  const misteryWheresMyMummy = [
    [
      "Echipa Misterelor se află în Egipt, unde participă la deschiderea unui muzeu dedicat Cleopatrei.",
      "https://i.postimg.cc/HxL0j95b/temp-Image-S5-Dc-ZI.jpg",
    ],
    [
      " În timpul evenimentului, apare o mumie malefică, care începe să-i amenințe pe toți cei prezenți. După ce scapă, echipa se hotărăște să investigheze misterul.",
      "https://i.postimg.cc/PrnKhcKw/temp-Image-GQdztb.jpg",
    ],
    [
      "Gașca misterelor hotărăște să se despartă pentru a căuta mai multe indicii despre mumie. Ei află că totul este legat de o comoară pierdută și un blestem vechi.",
      "https://i.postimg.cc/3RHWWgqn/temp-Imageqqo-LAS.jpg",
    ],
    [
      "Fred și Daphne pleacă în templu în căutarea comorii pierdute.",
      "https://i.postimg.cc/FFpg5Rf2/temp-Imagesp-Ouls.jpg",
    ],
    [
      "Scooby-Doo și Shaggy se deghizează și încearcă să atragă mumia.",
      "https://i.postimg.cc/vZ2bpWMc/temp-Image-Upl-Kl5.jpg",
    ],
    [
      "Împreună, reușesc să prindă mumia. Descoperă că în spatele planului era Velma, împreună cu arheologul de lângă templu, care încercau să îi sperie pe căutătorii de comori.",
      "https://i.postimg.cc/bw7FDJ9m/temp-Imagez5ug-Nv.jpg",
    ],
    [
      "Gașca o iartă pe Velma, iar aceștia își continuă vacanța în Egipt.",
      "https://i.postimg.cc/j58XhFK8/temp-Imagebu-CWhb.jpg",
    ],
  ];

  const misteryTrickOrTreat = [
    [
      "Gașca Misterelor merge la un carnaval de Halloween.",
      null,
      "https://www.youtube.com/embed/PQKHtdElMng?si=c28EHwYhUEgr8e-t",
    ],
    [
      "Acolo sunt atacați de o fantomă care seamănă cu Fred.",
      "https://i.postimg.cc/bwmhpxqv/temp-Image-YSf1-TM.jpg",
    ],
    [
      "Merg la Penitenciarul Coolsville pentru a intervieva pe prietena lor Coco și întâlnesc paznicul, care îi permite lui Coco să plece cu ei.",
      "https://i.postimg.cc/jjGN3Jw8/temp-Imagec-BTCNU.jpg",
    ],
    [
      "Gașca merge la bibliotecă să mai caute indicii.",
      "https://i.postimg.cc/mZFvzxyC/temp-Image-Cd-L5xu.jpg",
    ],
    [
      "Sunt atacați de fantome care seamănă cu ei, însă reușesc să scape.",
      "https://i.postimg.cc/qRtv6m1q/temp-Image-Ghqj-M6.jpg",
    ],
    [
      "Echipa misterelor își face un plan pentru a prinde fantomele într-un conac părăsit.",
      "https://i.postimg.cc/Fsk0Xpm9/temp-Imagei0-B1y-M.jpg",
    ],
    [
      "Echipa prinde fantomele și descoperă că, de fapt, acestea sunt roboți.",
      "https://i.postimg.cc/Xvw9rkYw/temp-Imageg-Ei-Dny.jpg",
    ],
    [
      "În spatele planului era Coco, care își dorea să elibereze prizonierii din penitenciar după ce speria pe toată lumea din oraș.",
      "https://i.postimg.cc/MGFb2pHL/temp-Image-OLUIra.jpg",
    ],
    [
      "Echipa Misterelor se bucură în continuare de sărbătoarea de Halloween.",
      "https://i.postimg.cc/vTDJ8Bt6/temp-Imageppy-Kw-J.jpg",
    ],
  ];

  const navigate = useNavigate();

  const handleMisteryHauntedHolidaysClick = () => {
    sessionStorage.setItem("mister", JSON.stringify(misteryHauntedHolidays));
    sessionStorage.setItem("operation", operation);
    navigate(operation);
  };

  const handleMisteryPiratesAhoyClick = () => {
    sessionStorage.setItem("mister", JSON.stringify(misteryPiratesAhoy));
    sessionStorage.setItem("operation", operation);
    navigate(operation);
  };

  const handleMisteryWheresMyMummyClick = () => {
    sessionStorage.setItem("mister", JSON.stringify(misteryWheresMyMummy));
    navigate(operation);
  };

  const handleMisteryTrickOrtreatClick = () => {
    sessionStorage.setItem("mister", JSON.stringify(misteryTrickOrTreat));
    navigate(operation);
  };

  const handleMisteryAlohaClick = () => {
    sessionStorage.setItem("mister", JSON.stringify(misteryAloha));
    navigate(operation);
  };

  const handleMisterLochNessClick = () => {
    sessionStorage.setItem("mister", JSON.stringify(misteryLochNess));
    navigate(operation);
  };

  const navigateToStartPage = () => {
    navigate("/");
  };

  return (
    <div className="start">
      <div className="choose-container">
        <img
          className="choose-scooby-logo"
          src="https://i.postimg.cc/y860LbcC/temp-Image-WV2-VSI.jpg"
          alt="choose-scooby-logo"
        />
      </div>
      <p className="choose-scooby-text">Alege un mister: </p>
      <div className="choose-scooby">
        <div className="mistery-container">
          <img
            className="pic"
            src="https://i.postimg.cc/zv11N7VF/temp-Image7wj-Xi-R.jpg"
            alt="aloha"
          />
          <p className="text"> Aloha Scooby-Doo!</p>
          <div className="mistery-button-container">
            <button
              className="mistery-button"
              onClick={() => handleMisteryAlohaClick()}
            >
              Alege
            </button>
          </div>
        </div>

        <div className="mistery-container">
          <img
            className="pic"
            src="https://i.postimg.cc/yxNQ28cK/temp-Image-GIXOS3.jpg"
            alt="haunted-holidays"
          />
          <p className="text"> Scooby-Doo! Sărbători Înfiorătoare</p>
          <div className="mistery-button-container">
            <button
              className="mistery-button"
              onClick={() => handleMisteryHauntedHolidaysClick()}
            >
              Alege
            </button>
          </div>
        </div>

        <div className="mistery-container">
          <img
            className="pic"
            src="https://i.postimg.cc/8zwWrnGs/temp-Image2-Ns-W2z.jpg"
            alt="loch-ness"
          />
          <p className="text"> Scooby-Doo! Monstrul din Loch Ness</p>
          <div className="mistery-button-container">
            <button
              className="mistery-button"
              onClick={() => handleMisterLochNessClick()}
            >
              Alege
            </button>
          </div>
        </div>
      </div>

      <div className="choose-scooby">
        <div className="mistery-container">
          <img
            className="pic"
            src="https://i.postimg.cc/FsvFv0zG/temp-Imageo-Gg-AYL.jpg"
            alt="pirates-ahoy"
          />
          <p className="text"> Scooby-Doo! Pirații Ahoy!</p>
          <div className="mistery-button-container">
            <button
              className="mistery-button"
              onClick={() => handleMisteryPiratesAhoyClick()}
            >
              Alege
            </button>
          </div>
        </div>

        <div className="mistery-container">
          <img
            className="pic"
            src="https://i.postimg.cc/KYStryTc/temp-Imagelz3y-Xl.jpg"
            alt="wheres-my-mummy"
          />
          <p className="text"> Scooby-Doo! Unde-i mumia mea?</p>
          <div className="mistery-button-container">
            <button
              className="mistery-button"
              onClick={() => handleMisteryWheresMyMummyClick()}
            >
              Alege
            </button>
          </div>
        </div>

        <div className="mistery-container">
          <img
            className="pic"
            src="https://i.postimg.cc/fRzYHhTM/temp-Image-Ew-OE1i.jpg"
            alt="trick-or-treat"
          />
          <p className="text"> Scooby-Doo! Ne dați ori nu ne dați?</p>
          <div className="mistery-button-container">
            <button
              className="mistery-button"
              onClick={() => handleMisteryTrickOrtreatClick()}
            >
              Alege
            </button>
          </div>
        </div>
      </div>
      <button className="go-to-start-button" onClick={navigateToStartPage}>
        înapoi
      </button>
      <img
        className="scooby-crew"
        src="https://i.postimg.cc/JzD0C8nd/temp-Image-YIf-Wn-B.jpg"
        alt="scooby-crew"
      />
    </div>
  );
}

export default ChooseMistery;
