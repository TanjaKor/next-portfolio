"use client";
import { useState, useEffect } from "react";

export default function Yhteys() {
  //useEffectin kautta js import, jotta next toimii oikein
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  const[nimi,setNimi]=useState("")
  const[puhelin,setPuhelin]=useState("")
  const[sposti,setEmail]=useState("")
  const[viesti,setViesti]=useState("")
  const[yritys,setYritys]=useState("")
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      nimi,
      viesti,
      sposti,
      puhelin,
      yritys,
    };

    const response = await fetch('/api/hello', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then(() => {
      setNimi('')
      setPuhelin('')
      setEmail('')
      setViesti('')
      setYritys('')
      setShowModal(true)
    });
  };

  const closeModal = () => {
    setShowModal(false); 
  };

  const Modal = () => {
  return(
  <div className="modal fade show" id="modal" tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true" style={{ display: "block" }}>
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5 text-black" id="exampleModalLabel">HURAA</h1>
          <button type="button" className="btn-close" onClick={closeModal} aria-label="Close"></button>
        </div>
        <div className="modal-body text-custom-blue">
          Viesti tuli perille, otan sinuun yhteyttä parin päivän sisään.
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
        </div>
      </div>
    </div>
  </div>
  )}

  return (
    <div id="yhteys" className="mx-md-5 px-5">
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
        <div className="row mx-md-5 mt-5 mb-4">
          <div className="col-md-4">
            <label htmlFor="nimi">Nimesi</label>
            <input
              type="text"
              className="form-control"
              onChange={(e)=>{setNimi(e.target.value)}}
              placeholder="Kirjoita nimesi"
              value={nimi}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="yritys">Yritys</label>
            <input
              type="text"
              className="form-control"
              onChange={(e)=>{setYritys(e.target.value)}}
              placeholder="Yrityksesi"
              value={yritys}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="email">Sposti</label>
            <input
              type="text"
              className="form-control"
              onChange={(e)=>{setEmail(e.target.value)}}
              placeholder="Sposti"
              value={sposti}
            />
          </div>
        </div>
        <div className="row mx-md-5 mt-4 mb-4">
          <div className="col-md-4">
            <label htmlFor="puhelin">Puhelinnumero</label>
            <input
              type="text"
              className="form-control"
              onChange={(e)=>{setPuhelin(e.target.value)}}
              placeholder="Kirjoita puhelinnumerosi"
              value={puhelin}
            />
          </div>
          <div className="col-md-8">
            <label htmlFor="yritys">Viesti</label>
            <textarea
              type="text"
              className="form-control"
              onChange={(e)=>{setViesti(e.target.value)}}
              placeholder="viesti"
              value={viesti}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-custom-yellow btn-large">
          Submit
        </button>
      </form>
      {showModal && <Modal />}
    </div>
  );
}

