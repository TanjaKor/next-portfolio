"use client";
import { useRef } from "react";

export default function Yhteys() {
  const formRef = useRef();
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      nimi: event.target.nimi.value,
      viesti: event.target.viesti.value,
      sposti: event.target.sposti.value,
      puhelin: event.target.puhelin.value,
      yritys: event.target.yritys.value,
    };

    const response = await fetch('/api/hello', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    if (response.ok) {
      formRef.current.reset();
    }
  };
  return (
    <div id="yhteys" className="mx-5 px-5">
      <h1 className="display-2">Ota yhteyttä</h1>
      <p>Kilauta tai laita sähköpostia, jos kiinnostuit</p>
      <p>
        <i className="bi bi-telephone"></i> 0406725585 <br />
        <i className="bi bi-envelope-open"></i>{" "}
        <a className="text-custom-yellow" href="mailto:tmkorolainen@gmail.com">
          tmkorolainen @ gmail.com
        </a>
      </p>
      <form onSubmit={handleSubmit} className="mb-5">
        <div className="row mx-5 mt-5 mb-4">
          <div className="col-md-4">
            <label htmlFor="nimi">Nimesi</label>
            <input
              type="text"
              className="form-control"
              name="nimi"
              placeholder="Kirjoita nimesi"
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="yritys">Yritys</label>
            <input
              type="text"
              className="form-control"
              name="yritys"
              placeholder="Yrityksesi"
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="sposti">Sposti</label>
            <input
              type="text"
              className="form-control"
              name="sposti"
              placeholder="Sposti"
            />
          </div>
        </div>
        <div className="row mx-5 mt-4 mb-4">
          <div className="col-md-4">
            <label htmlFor="puhelin">Puhelinnumero</label>
            <input
              type="text"
              className="form-control"
              name="puhelin"
              placeholder="Kirjoita puhelinnumerosi"
            />
          </div>
          <div className="col-md-8">
            <label htmlFor="yritys">Viesti</label>
            <textarea
              type="text"
              className="form-control"
              name="viesti"
              placeholder="viesti"
            />
          </div>
        </div>
        

        <button type="submit" className="btn btn-custom-yellow btn-large">
          Submit
        </button>
      </form>
    </div>
  );
}
