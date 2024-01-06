import IconoLocation from "../../assets/img/iconoLocation.svg";
import IconoPhone from "../../assets/img/iconoPhone.svg";
import IconoLetter from "../../assets/img/iconoLetter.svg";
import "../../assets/style/Section2.css";

function ContactUs() {
  return (
    <>
    <div id="contacto"/>
      <div className="bg-info p-0 pt-2 pb-2 p-0">
        <h1 className="text-center text-light animate__animated animate__bounceInDown">INICIA TU COTIZACIÓN AQUÍ</h1>
        <h3 className="text-center text-light">
          Déjanos tus datos de contacto, nos comunicaremos contigo a la
          brevedad.
        </h3>
      </div>
      <div className="row justify-content-center">
        <div className="col-12 col-md-5 mb-5 mt-5">
          <div className="row justify-content-center">
            <div className="col-1 mt-5 text-end">
              <a href="https://www.google.com.mx/maps/place/Multillantas+de+Chiapas/@16.7290886,-93.1027877,19.26z/data=!4m9!1m2!2m1!1sCalzada+Zoomat+130.+Col.+Francisco+y+Madero.+Tuxtla+Guti%C3%A9rrez.+Chiapas.!3m5!1s0x85ecd8740a049a3b:0x57a5857763c34ad9!8m2!3d16.7286371!4d-93.1026817!16s%2Fg%2F11clssr4z_?entry=ttu" target="_blank" rel="noopener noreferrer"><img className="img-fluid" loading="lazy" src={IconoLocation} /></a>
            </div>
            <div className="col-5">
              <h2>UBICACIÓN:</h2>
              <p><a href="https://www.google.com.mx/maps/place/Multillantas+de+Chiapas/@16.7290886,-93.1027877,19.26z/data=!4m9!1m2!2m1!1sCalzada+Zoomat+130.+Col.+Francisco+y+Madero.+Tuxtla+Guti%C3%A9rrez.+Chiapas.!3m5!1s0x85ecd8740a049a3b:0x57a5857763c34ad9!8m2!3d16.7286371!4d-93.1026817!16s%2Fg%2F11clssr4z_?entry=ttu" target="_blank" rel="noopener noreferrer">Calzada Zoomat 130. Col. Francisco <br />y Madero. Tuxtla Gutiérrez. Chiapas.</a></p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-1 mt-5 text-end">
              <a href="mailto:ventas@predictionsoft"><img className="img-fluid" loading="lazy" src={IconoLetter} /></a>
            </div>
            <div className="col-5">
              <h2>EMAIL:</h2>
              <a href="mailto:ventas@predictionsoft"><p>ventas@predictionsoft</p></a>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-1 mt-5 text-end">
              <a href="tel:+529613662079"><img className="img-fluid" loading="lazy" src={IconoPhone} /></a>
            </div>
            <div className="col-5">
              <h2>WHATSAPP:</h2>
              <a href="tel:+529613662079"><p>961 366 2079</p></a>
            </div>
          </div>
        </div>
        {/*Form section*/}
        <div className="col-12 col-md-6 m-3">
          <div className="row mt-5 mb-4">
            <div className="col-6">
              <div data-mdb-input-init className="form-outline">
                <input type="text" id="form3Example1" className="form-control" placeholder="Tu nombre."/>
              </div>
            </div>
            <div className="col-6">
              <div data-mdb-input-init className="form-outline">
                <input type="text" id="form3Example2" className="form-control" placeholder="Email."/>
              </div>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-6">
              <div data-mdb-input-init className="form-outline">
                <input type="text" id="form3Example1" className="form-control" placeholder="Asunto."/>
              </div>
            </div>
            <div className="col-6">
              <div data-mdb-input-init className="form-outline">
                <input type="text" id="form3Example2" className="form-control" placeholder="Teléfono."/>
              </div>
            </div>
            <div className="col-12 mt-4">
              <div data-mdb-input-init className="form-outline">
                <textarea className="form-control" id="form3Example2" type="text" rows="4" placeholder="Mensaje."></textarea>
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
