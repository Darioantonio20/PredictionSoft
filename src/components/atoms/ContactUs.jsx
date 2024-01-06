import IconoLocation from "../../assets/img/iconoLocation.svg";
import IconoPhone from "../../assets/img/iconoPhone.svg";
import IconoLetter from "../../assets/img/iconoLetter.svg";
import "../../assets/style/Section2.css";
function ContactUs() {
  return (
    <>
        <div className="bg-info p-0 pt-2 pb-2 p-0">
          <h1 className="text-center text-light">INICIA TU COTIZACIÓN AQUÍ</h1>
          <h3 className="text-center text-light">
            Déjanos tus datos de contacto, nos comunicaremos contigo a la
            brevedad.
          </h3>
        </div>
        <div className="row">
          <div className="col-5 mb-5 mt-5">
            <div className="row">
              <div className="col-1 mt-5">
                <img
                  className="img-fluid float-md-end"
                  loading="lazy"
                  src={IconoLocation}
                />
              </div>
              <div className="col-5">
                <h2>UBICACIÓN:</h2>
                <p>
                  Calzada Zoomat 130. Col. Francisco <br />y Madero. Tuxtla
                  Gutiérrez. Chiapas.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-1 mt-5">
                <img
                  className="img-fluid float-md-end"
                  loading="lazy"
                  src={IconoLetter}
                />
              </div>
              <div className="col-5">
                <h2>EMAIL:</h2>
                <p>ventas@predictionsoft</p>
              </div>
            </div>
            <div className="row">
              <div className="col-1 mt-5">
                <img
                  className="img-fluid float-md-end"
                  loading="lazy"
                  src={IconoPhone}
                />
              </div>
              <div className="col-5">
                <h2>WHATSAPP:</h2>
                <p>961 366 2079</p>
              </div>
            </div>
          </div>

          <div className="col-7">
            <div className="row mb-4">
              <div className="col-6">
                <div data-mdb-input-init className="form-outline">
                  <input
                    type="text"
                    id="form3Example1"
                    className="form-control"
                    placeholder="Tu nombre."
                  />
                </div>
              </div>
              <div className="col-6">
                <div data-mdb-input-init className="form-outline">
                  <input
                    type="text"
                    id="form3Example2"
                    className="form-control"
                    placeholder="Email."
                  />
                </div>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-6">
                <div data-mdb-input-init className="form-outline">
                  <input
                    type="text"
                    id="form3Example1"
                    className="form-control"
                    placeholder="Asunto."
                  />
                </div>
              </div>
              <div className="col-6">
                <div data-mdb-input-init className="form-outline">
                  <input
                    type="text"
                    id="form3Example2"
                    className="form-control"
                    placeholder="Teléfono."
                  />
                </div>
              </div>
              <div className="col-12 mt-4">
                <div data-mdb-input-init className="form-outline">
                  <textarea
                    className="form-control"
                    id="form3Example2"
                    type="text"
                    rows="4"
                    placeholder="Mensaje."
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="text-center">
              <button className="button text-bg-blue">Enviar</button>
            </div>
          </div>
        </div>
    </>
  );
}

export default ContactUs;
