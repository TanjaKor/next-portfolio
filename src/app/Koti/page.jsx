"use client";
import Image from "next/image";

export default function Koti() {
  return (
    <div
      id="koti"
      className="hero-bg text-dark d-flex justify-content-center align-items-center"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-12">
            <div className="text-center text-md-start ms-md-5 ps-md-5">
              <h1 className="display-1 fw-bold mb-3 syne-mono-regular">
                Tanja Korolainen
              </h1>
              <p className="lead">Ladataan teidän tuoretta devaajaa!</p>
            </div>
            <div className="mt-8 ms-md-5 ps-md-5 mb-4 mb-md-0">
              <div
                className="progress"
                role="progressbar"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated bg-custom-blue"
                  style={{ width: "50%" }}
                ></div>
              </div>
            </div>
          </div>
          <div className="offset-lg-1 col-lg-5 col-12 text-center">
            <div className="position-relative mb-4 mb-md-0">
              <Image
                className="rounded-circle mb-5 pb-2"
                src="/WEB-2.jpg"
                width={250}
                height={400}
                alt="Profiilikuva"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="custom-shape-divider-bottom-1735892460">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
}
