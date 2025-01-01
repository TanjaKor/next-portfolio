"use client";

export default function Minä() {
  return (
    <div>
    <h1 className="display-2">Et sä tiedä kuka mä oon?</h1>
    <div className="row">
      <div className="col-md-6">
        
        <p className="display-6">Ei hätää, mä kerron.</p>
        <p>
          Olen kahtaa (eli opinnäytetyö ja harjoittelu) vaille ICT-insinööri,
          jonka intohimona on oppia uutta ja tulla paremmaksi. Sen mihin lähden,
          teen täysillä, opin virheistäni ja kokeilen uutta. Tämä näkyy
          portfoliossani siinä, että olen kokeillut monenlaista, niin
          peliohjelmointia kuin tekoälynkin perusteita. Harrastan käsitöitä ja
          koiraurheilua, sekä lukemista ja liikuntaa kun niihin resursseja
          riittää. Pidän huolta omasta hyvinvoinnistani enkä siksi istu koneella
          24/7, vaikka intohimonani onkin tulla huippuosaajaksi uudella
          alallani, tai oikeastaan ehkä juuri siksi pidänkin huolta
          hyvinvoinnistani. Parhaaksi voi tulla vain, jos pitää aivo- ja muutkin
          solut hereillä ja terveenä.
        </p>
      </div>
      <div className="col-md-6">
        <div
          className="progress"
          role="progressbar"
          aria-label="Basic example"
          aria-valuenow="0"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div className="progress-bar" style={{ width: "0%" }}></div>
        </div>
        <div
          className="progress"
          role="progressbar"
          aria-label="Basic example"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div className="progress-bar" style={{ width: "25%" }}></div>
        </div>
        <div
          className="progress"
          role="progressbar"
          aria-label="Basic example"
          aria-valuenow="50"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div className="progress-bar" style={{ width: "50%" }}></div>
        </div>
        <div
          className="progress"
          role="progressbar"
          aria-label="Basic example"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div className="progress-bar" style={{ width: "75%" }}></div>
        </div>
        <div
          className="progress"
          role="progressbar"
          aria-label="Basic example"
          aria-valuenow="100"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div className="progress-bar" style={{ width: "100%" }}></div>
        </div>
      </div>
    </div>
    </div>
  );
}
