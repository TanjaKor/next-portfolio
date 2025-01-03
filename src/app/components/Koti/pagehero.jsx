"use client";
import Image from "next/image";

export default function Koti() {
  return (
    <div className="hero-bg py-5 py-lg-14 py-12 bg-cover text-dark ">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-12">
            <div>
              <div className=" text-center text-md-start ">
                <h1 className=" display-2 fw-bold  mb-3">Tanja Korolainen</h1>
                <p className="lead">Ladataan juuri teidän tuoretta devaajaa!</p>
              </div>
              <div className="mt-8">
                <div className="bg-white rounded-md-pill shadow rounded-3 mb-4">
                  <div className="p-md-2 p-4">
                    <form className="row g-1">
                      <div className="col-12 col-md-5"></div>
                      <div className="col-12 col-md-4"></div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="offset-lg-1 col-lg-5 col-12 text-center">
            <div className="position-relative ">
              <Image
                className="rounded-circle mb-5 pb-2"
                src="/avatar.png"
                width={250}
                height={250}
                alt="Picture of the author"
              ></Image>
            </div>
          </div>
        </div>
        
      </div>
      <div className="relative-pos min-h-52">
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
    </div>
  );
}
