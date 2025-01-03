"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Navigation() {
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
            <span className="navbar-toggler-icon fs-2"></span>
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
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link className="nav-link active" href="/">
                    Koti
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/projekti">
                    Projektit
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/mina">
                    Minä
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/contact">
                    Ota yhteyttä
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}