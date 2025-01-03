"use client";

export default function Yhteys() {
  return (
    <div id="yhteys" className="">
      <h1 className="display-2">Ota yhteyttä</h1>
      <p>Kilautta tai laita sähköpostia, jos kiinnostuit</p>
      <p>
      <i className="bi bi-telephone"></i> 0406725585 <br/>
      <i className="bi bi-envelope-open"></i> <a className="text-custom-yellow" href="mailto:tmkorolainen@gmail.com">tmkorolainen @ gmail.com</a>
      </p>
      {/* <form>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label forhtml="name" className="form-label">
              Nimi
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              aria-describedby="nameHelp"
            />
          </div>
          <div className="col-md-6 mb-3">
            <label forhtml="yritys" className="form-label">
              Yritys
            </label>
            <input type="text" className="form-control" id="yritys" />
          </div>
        </div>
        <div className="mb-3">
          <label forhtml="viesti" className="form-label">
            Viestisi
          </label>
          <textarea
            className="form-control"
            aria-label="With textarea"
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary btn-large">
          Submit
        </button>
      </form> */}
    </div>
  );
}
