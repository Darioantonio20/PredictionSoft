import React, { useState } from 'react';
import IconoLocation from "../../assets/img/iconoLocation.svg";
import IconoPhone from "../../assets/img/iconoPhone.svg";
import IconoLetter from "../../assets/img/iconoLetter.svg";
import "../../assets/style/Section2.css";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let isValid = true;
    const newErrors = { ...formErrors };

    for (const key in formData) {
      if (formData[key] === '') {
        isValid = false;
        newErrors[key] = `Por favor ingresa tu ${key}.`;
      } else {
        newErrors[key] = '';
      }
    }

    if (!isValid) {
      setFormErrors(newErrors);
    } else {
      // Aquí puedes enviar los datos del formulario
      console.log('Datos del formulario:', formData);
      // Lógica de envío del formulario
    }
  };
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
          <form className="row g-3" onSubmit={handleSubmit}>
            <div className="row mt-5 mb-4">
              <div className="col-6">
                <input type="text" name="name" value={formData.name} onChange={handleChange} className={`form-control ${formErrors.name && 'is-invalid'}`} placeholder="Tu nombre." required/>
                {formErrors.name && <div className="invalid-feedback">{formErrors.name}</div>}
              </div>
              <div className="col-6">
                <input type="email" name="email" value={formData.email} onChange={handleChange} className={`form-control ${formErrors.email && 'is-invalid'}`} placeholder="Email." required/>
                {formErrors.email && <div className="invalid-feedback">{formErrors.email}</div>}
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-6">
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} className={`form-control ${formErrors.subject && 'is-invalid'}`} placeholder="Asunto." required/>
                {formErrors.subject && <div className="invalid-feedback">{formErrors.subject}</div>}
              </div>
              <div className="col-6">
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className={`form-control ${formErrors.phone && 'is-invalid'}`} placeholder="Teléfono." required/>
                {formErrors.phone && <div className="invalid-feedback">{formErrors.phone}</div>}
              </div>
              <div className="col-12 mt-4">
                <textarea className={`form-control ${formErrors.message && 'is-invalid'}`} id="message" name="message" rows="4" value={formData.message} onChange={handleChange} placeholder="Mensaje." required></textarea>
                {formErrors.message && <div className="invalid-feedback">{formErrors.message}</div>}
              </div>
            </div>
            <div className="text-center">
              <button type="submit" className="btn button text-bg-blue">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>  
    </>
  );
}

export default ContactUs;
