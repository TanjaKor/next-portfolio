"use client";

import { useEffect } from "react";

export default function Navigation() {
  //useEffectin kautta js import, jotta next toimii oikein
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <div className="">
      <nav className="navbar navbar-light fixed-top">
        <div className="container-fluid">
          <button
            className="navbar-toggler ms-auto"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span  className="navbar-toggler-icon fs-2"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body fs-2 text-center syne-mono-regular">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#koti">
                    Koti
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#projektit">
                    Projektit
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#mina">
                    Minä
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#yhteys">
                    Ota yhteyttä
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
