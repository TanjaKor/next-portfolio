"use client";
import Image from "next/image";

export default function BelowDivider() {
  return (
    <div className="">
      <h1 className="display-2">Projektini</h1>
      <div className="row">
        <div className="col-md-4">
          <div
            className="card"
          >
            <Image
              className="card-img-top"
              src="/portfolio.png"
              width = {500}
            height= {300} 
              alt="Picture of the author"
              style={{ objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="card-title">Ensimmäinen portfolioni</h5>
              <p className="card-text">
                Ensimmäinen Bootstrap sivustoni ja portfolioni
              </p>
              <a href="https://tanjakor.github.io/Portfolioharjoitus/#valokuvaus" className="btn btn-primary">
                Käy sivustolla
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className="card"
          >
            <Image
              className="card-img-top"
              src="/ranch.png"
              width = {500}
            height= {300} 
              alt="Picture of the author"
              style={{ objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="card-title">Kuikan Ranch nettisivut</h5>
              <p className="card-text">
                Kuvitteelliselle matkailuyritykselle tehdyt nettisivut
                Bootstrapilla, pelkkä frontti.
              </p>
              <a href="https://ab3775.pages.labranet.jamk.fi/web-visualisaatio/ranch/bootstrap-npm-starter/index.html" className="btn btn-primary">
                Käy sivustolle
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className="card"
          >
            <Image
              className="card-img-top"
              src="/chrome.png"
              width = {500}
            height= {300} 
              alt="Picture of the author"
              style={{ objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="card-title">Wordpress sivusto</h5>
              <p className="card-text">
                Kuvitteelliselle yritykselle tehdyt nettisivut
                Worpdressillä, sisältäen verkkokaupan jne.
              </p>
              <a href="https://github.com/TanjaKor/JAMK-web-julkaisuj-rjestelm-t" className="btn btn-primary">
                Käy kurssin dokumentaatio sivulla
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div
            className="card"
          >
            <Image
              className="card-img-top"
              src="/3dpeli.png"
              width = {500}
            height= {300} 
              alt="Picture of the author"
              style={{ objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="card-title">Peliohjelmoinnin harjoittelua</h5>
              <p className="card-text">
                3d-peli, jonka tein osana AMKoodari kursseja vuonna 2020/2021 ennen tutkinto-opintojani.
              </p>
              <a href="https://github.com/TanjaKor/XAMK_3d_suunnistuspeli" className="btn btn-primary">
                Tutki koodiani
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className="card"
          >
            <Image
              className="card-img-top"
              src="/android.png"
              width = {500}
            height= {300} 
              alt="Picture of the author"
              style={{ objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="card-title">Android Jetpack Compose</h5>
              <p className="card-text">
                Kuvitteelliselle yritykselle tehty android app jetpack composella. 
              </p>
              <a href="https://gitlab.labranet.jamk.fi/AB3775/android-exercises/-/tree/main/MyCompanyApp?ref_type=heads" className="btn btn-primary">
                Tutki koodiani
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className="card"
          >
            <Image
              className="card-img-top"
              src="/reactnative.png"
              width = {500}
            height= {300} 
              alt="Picture of the author"
              style={{ objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="card-title">Movies sovellus</h5>
              <p className="card-text">
                Movies-sovellus, jossa listasin apin kautta uusimpia leffoja, apin kautta 
                löytää leffoista tarkemmat tiedot ja pääsee katsomaan niihin littyviä videoita (kuten trailereita jne)
              </p>
              <a href="https://gitlab.labranet.jamk.fi/AB3775/mobile-exercises/-/tree/main/Movies2?ref_type=heads" className="btn btn-primary">
                Tarkastele koodiani
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
