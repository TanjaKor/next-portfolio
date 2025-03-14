"use client";

export default function Minä() {
  return (
    <div id="mina" className="container mt-5 py-5">
      <h1 className="display-2">Et sä tiedä kuka mä oon?</h1>
      <section className="d-flex justify-content-start m-md-5 p-5">
        <div className="col-md-6 my-5">
          <h1> Ei hätää, mä kerron.</h1>
          <p className="fs-5">
            Olen kahta (eli opinnäytetyö ja harjoittelu) vaille ICT-insinööri,
            joka etsii hedelmällisen maaperän tarjoavaa yritystä, johon juurtua
            ja jossa kasvaa. Alanvaihtajana omaan monipuolisen kokemuksen ja
            laajakuvalinssin, jolla tutkailla alaa. Sytyn uusista haasteista ja ongelmanratkaisusta, 
            oli sitten kyseessä pakohuonepeli, AOC-haaste tai uuden frameworkin opettelu. Onneksi haasteet eivät lopu tällä alalla. 
            Intohimonani on kehittää jatkuvasti
            itsestäni parempi variantti ja tämä näkyy portfoliossani
            monipuolisten taitojen opiskeluna, aina peliohjelmoinnista webkehitykseen. Olen tottunut pelaamaan erilaisissa tiimeissä, 
            olenkin erinomainen joukkuepelaaja ja sulaudun helposti uuteen työyhteisöön.
          </p>
        </div>
      </section>
      <div className="row m-5 pb-5">
        {/*kokeile saako grid+gap muotoiltua ikonit*/}
        <h1 className="mb-5"> Ohjelmointitaidot </h1>
        {/*osaan käyttää, peruskäyttö*/}
        <section className="col-md-4 mt-3 mb-5">
          <h4>Sujuu itsenäisesti</h4>
          <div
            className="progress"
            role="progressbar"
            aria-label="Basic example"
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              className="progress-bar bg-custom-yellow"
              style={{ width: "50%" }}
            ></div>
          </div>
          <p className="d-flex flex-wrap justify-content-center fs-1 ">
            <i className="devicon-bootstrap-plain colored m-2"> </i>

            <i className="devicon-figma-plain m-2"></i>

            <i className="devicon-html5-plain colored m-2"></i>

            <i className="devicon-python-plain colored m-2"></i>

            <i className="devicon-css3-plain colored m-2"></i>

            <i className="devicon-nodejs-line-wordmark m-2"></i>

            <i className="devicon-androidstudio-plain colored m-2"></i>

            <i className="devicon-javascript-plain colored m-2"></i>

            <i className="devicon-jetpackcompose-plain-wordmark m-2"></i>

            <i className="devicon-git-plain m-2"></i>

            <i className="devicon-github-original-wordmark m-2"></i>

            <i className="devicon-gitlab-plain-wordmark m-2"></i>
            
          </p>
        </section>
        {/*kertauksen tai dokumentaation tutkimisen jälkeen osaan käyttää*/}
        <section className="col-md-4 my-3 mb-5">
          <h4>Peruskäyttö onnistuu itsenäisesti dokumentaation avulla</h4>
          <div
            className="progress"
            role="progressbar"
            aria-label="Basic example"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              className="progress-bar bg-custom-yellow"
              style={{ width: "20%" }}
            ></div>
          </div>
          <p className="d-flex flex-wrap justify-content-center fs-1">
            <i className="devicon-express-original m-2"></i>
            <i className="devicon-nextjs-line-wordmark m-2"></i>
            <i className="devicon-kotlin-plain colored m-2"></i>
            <i className="devicon-azuresqldatabase-plain m-2"></i>
            <i className="devicon-firebase-plain-wordmark m-2"></i>
            <i className="devicon-react-original colored m-2"> </i>
          </p>
        </section>
        {/*alkeet, eli olen testannut pari kertaa / opetellut kauan aikaa sitten*/}
        <section className="col-md-4 my-3 mb-5">
          <h4>Perusteet</h4>
          <div
            className="progress"
            role="progressbar"
            aria-label="Basic example"
            aria-valuenow="10"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              className="progress-bar bg-custom-yellow"
              style={{ width: "10%" }}
            ></div>
          </div>
          <p className="d-flex flex-wrap justify-content-center fs-1">
            <i className="devicon-flutter-plain colored m-2"></i>

            <i className="devicon-tailwindcss-original colored m-2"></i>

            <i className="devicon-csharp-plain colored m-2"></i>

            <i className="devicon-cplusplus-plain colored m-2"></i>

            <i className="devicon-java-plain colored m-2"></i>

            <i className="devicon-sass-original m-2"></i>
          </p>
        </section>
      </div>
    </div>
  );
}
