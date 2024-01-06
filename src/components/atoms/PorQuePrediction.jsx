import React from "react";
import LogoPredictionSoft from "../../assets/img/logoPredictionSoft.svg";
import "../../assets/style/Card.css";

function PorQuePrediction() {
  return (
    <>
      <div className="bg-info p-0 pt-2 pb-2 mt-5 mb-5">
        <h1 className="text-center text-light animate__animated animate__bounceInDown">¿POR QUE ELEGIR PREDICTION?</h1>
      </div>
      <div className="row mb-5 p-0 m-5">
        <div className="col-lg-4 col-md-6 col-sm-12 mb-3 mt-3 d-flex justify-content-center">
          <div className="card text-center">
            <img
              src={LogoPredictionSoft}
              className="img-fluid"
              loading="lazy"
              width={250}
              height={250}
            />
            <div className="card__content">
              <p className="card__title">COMPRAS E INVENTARIOS</p>
              <p className="card__description">
                Facilita la integración de tus procesos de: ventas, compras,
                inventarios, multialmacenes, cuentas por cobrar, cuentas por
                pagar.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mb-3 mt-3 d-flex justify-content-center">
          <div className="card text-center">
            <img
              src={LogoPredictionSoft}
              className="img-fluid"
              loading="lazy"
              width={250}
              height={250}
            />
            <div className="card__content">
              <p className="card__title">ESTABILIDAD</p>
              <p className="card__description">
                Se ha logrado crear un sistema en un 99% libre de errores de
                programación interna. Confía en los mejoras.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mb-3 mt-3 d-flex justify-content-center">
          <div className="card text-center">
            <img
              src={LogoPredictionSoft}
              className="img-fluid"
              loading="lazy"
              width={250}
              height={250}
            />
            <div className="card__content">
              <p className="card__title">CONSISTENCIA</p>
              <p className="card__description">
                Datos 100% transaccional. Tu información en base de datos de
                ultima generación Firebird 3.0 Olvídate de perder información.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mb-3 mt-3 d-flex justify-content-center">
          <div className="card text-center">
            <img
              src={LogoPredictionSoft}
              className="img-fluid"
              loading="lazy"
              width={250}
              height={250}
            />
            <div className="card__content">
              <p className="card__title">FACTURACIÓN ELECTRONÓNICA 4.0</p>
              <p className="card__description">
                Facturazión electrónica respaldada por Sifei, un PAC autorizado
                por el SAT.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mb-3 mt-3 d-flex justify-content-center">
          <div className="card text-center">
            <img
              src={LogoPredictionSoft}
              className="img-fluid"
              loading="lazy"
              width={250}
              height={250}
            />
            <div className="card__content">
              <p className="card__title">SISTEMA ONLINE</p>
              <p className="card__description">
                Obtén información VITAL en tiempo y forma para la toma de
                decisiones en tu empresa.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mb-3 mt-3 d-flex justify-content-center">
          <div className="card text-center">
            <img
              src={LogoPredictionSoft}
              className="img-fluid"
              loading="lazy"
              width={250}
              height={250}
            />
            <div className="card__content">
              <p className="card__title">SEGURIDAD DE LA INFORMACIÓN</p>
              <p className="card__description">
                Respalda en línea cada una de tus transacciones que realices en
                tu empresa, logrando la seguridad de tu información.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PorQuePrediction;
