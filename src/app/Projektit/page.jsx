"use client";
import Image from "next/image";

export default function Projektit() {
  return (
    <div id="projektit" className="bg-custom-blue container mt-5 px-md-5 pt-5">
      <h1 className="display-2">Projektini</h1>
      <section className="row my-4">
       
        <div className="col-md-6 my-5">
          <div
            className="card shadow mt-5 mb-1 mx-md-4" >
            <Image
              className="card-img-top"
              src="/ranch.png"
              width = {500}
            height= {300} 
              alt="kuvakaappaus projektista"
              style={{ objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="card-title">Kuikan Ranch nettisivut</h5>
              <p className="card-text">
                Tämä projekti oli hauska tehdä ja opin perusteita Sassin käytöstä sekä animaatioista. Syvensin osaamistani Bootstrapin käytössä. 
                Responsiivisuus jäi tässä projektissa hiukan vajaaksi, mutta kaiken kaikkiaan tämä oli hauska värien käytön ja animaatioiden harjoittelun alusta.
              </p>
              <a href="https://ab3775.pages.labranet.jamk.fi/web-visualisaatio/ranch/bootstrap-npm-starter/index.html" className="btn btn-custom-yellow">
                Käy sivustolla
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 my-5">
          <div
            className="card shadow mt-5 mb-1 mx-md-4" >
            <Image
              className="card-img-top"
              src="/cryometer.png"
              width = {500}
            height= {300} 
              alt="kuva projektista"
              style={{ objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="card-title">Cryo-Meter</h5>
              <p className="card-text">
                Jetpack Composen ja Android-mobiilikehittämisen harjoittelua. Vielä keskeneräinen projekti, 
                jota työstän opinnäytetyön ohella. Sovellus laskee ajan kuinka kauan lapsi itkee, laskee itkun 
                keskiarvoisen pituuden ja itkukerrat vuorokaudessa.
              </p>
              <a href="https://github.com/TanjaKor/cryometer?tab=readme-ov-file" className="btn btn-custom-yellow">
                Tutustu koodiin
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="row my-4 ">
        <div className="col-md-4 mb-5">
          <div
            className="card shadow mb-5 mx-md-3"  >
            <Image
              className="card-img-top"
              src="/3dpeli.png"
              width = {500}
            height= {300} 
              alt="kuva projektista"
              style={{ objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="card-title">Peliohjelmoinnin harjoittelua</h5>
              <p className="card-text">
                3d-peli, jonka tein osana AMKoodari kursseja vuonna 2020/2021 ennen tutkinto-opintojani. 
                Tämä oli mielenkiintoinen projekti, opin C#:n perusteita sekä Unityn käytön perusteita. Myös pelisuunnittelun monimuotoisuus paljastui projektin aikana. 
              </p>
              <a href="https://github.com/TanjaKor/XAMK_3d_suunnistuspeli" className="btn btn-custom-yellow">
                Tutki koodiani
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div
            className="card shadow mb-5 mx-md-3" >
            <Image
              className="card-img-top"
              src="/android.png"
              width = {500}
            height= {300} 
              alt="kuva projektista"
              style={{ objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="card-title">Android Jetpack Compose</h5>
              <p className="card-text">
                Kuvitteelliselle yritykselle tehty Android sovellus Jetpack Composella. Projekti opetti yhdistämään Android Basics- kurssin pieniä palasia yhteen.
                Opin myös uutena asiana sisäänkirjautumisen toteuttamisen (ilman backendiä). Visuaalinen puoli jäi mielestäni hiukan torsoksi ja dark-mode-koodin toimimattomuus mysteeriksi.
              </p>
              <a href="https://github.com/TanjaKor/androidBasicsJetpackCompose/tree/main/MyCompanyApp/app/src/main/java/com/example/mycompanyapp" className="btn btn-custom-yellow">
                Tutki koodiani
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <div
            className="card shadow mb-5 mx-md-3" >
            <Image
              className="card-img-top"
              src="/reactnative.png"
              width = {500}
            height= {300} 
              alt="kuva projektista"
              style={{ objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="card-title">Movies sovellus</h5>
              <p className="card-text">
                Android Movies- sovellus React Nativella. Projekti opetti API:n käyttöä ja React Nativen tyylimuotoilut tulivat myös tutummaksi.
                Yllätyin kuinka kiva React Nativella on rakentaa mobiilisovelluksia.                
              </p>
              <a href="https://github.com/TanjaKor/ReactNative-Flutter-PWA/tree/main/Movies2" className="btn btn-custom-yellow">
                Tutki koodiani
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
