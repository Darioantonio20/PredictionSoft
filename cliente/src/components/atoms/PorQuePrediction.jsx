/* The code is defining a React functional component called `PorQuePrediction`. This component renders
a set of cards that display information about the features and benefits of a software called
"Prediction Software". */
import React from "react";
import LogoPredictionSoft from "../../assets/img/logoPredictionSoft.svg";
import "../../assets/style/Card.css";
import "../../assets/style/PorQuePredictionSoft.css";

function PorQuePrediction() {
  return (
    <>
      <div className="bg-info p-0 pt-2 pb-2 mt-1 mb-5">
        <h1 className="text-center text-light animate__animated animate__bounceInDown">¿POR QUÉ ELEGIR PREDICTION SOFTWARE?</h1>
      </div>
      <div className="row mb-5 p-0 m-5">
        <div className="col-lg-4 col-md-6 col-sm-12 mb-3 mt-3 d-flex justify-content-center">
          <div className="card text-center">
            <div className="container">
              <p className="card__title mb-5">COMPRAS E INVENTARIOS</p>
              <p className="card__description">
                Facilita la integración de tus procesos de ventas, compras,
                inventarios, multialmacenes, cuentas por cobrar, cuentas por
                pagar en un ambiente multiusuario.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mb-3 mt-3 d-flex justify-content-center">
          <div className="card text-center">
            <div className="container">
              <p className="card__title mb-5">ALTA DISPONIBILIDAD</p>
              <p className="card__description">
                Operatividad continúa con nuestro sistema 24X7X365 al estar operando en la nube olvídate de tiempos improductivos por caídas de sistemas.
                ALL Time Prediction SOFTware MR. Conecta desde MAC, Linux, Windows, Tablet Android, etc.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mb-3 mt-3 d-flex justify-content-center">
          <div className="card text-center">
            <div className="container">
              <p className="card__title mb-5">FÁCIL INTEGRACIÓN CON BI</p>
              <p className="card__description">
                Conecta con potentes motores de Bussines Inteligence en tiempo real gracias a su respaldo en línea a base de datos propios de terceros proveedores de BI. Obtén el máximo beneficio de información en línea y confiable para toma de decisiones para gerentes/directores.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mb-3 mt-3 d-flex justify-content-center">
          <div className="card text-center">
            <div className="container">
              <p className="card__title mb-5">FACTURACIÓN ELECTRÓNICA 4.0</p>
              <p className="card__description">
                Facturas, complementos de pago, notas de crédito, carta porte 3.0 todo en v4.0 timbrados con Sifei, un PAC autorizado por el SAT.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mb-3 mt-3 d-flex justify-content-center">
          <div className="card text-center">
            <div className="container">
              <p className="card__title mb-5">ESTABILIDAD, CONSISTENCIA, TRANSACCIONAL, ESCALABLE</p>
              <p className="card__description">
                Sistema super estable libre de errores de programación, no se pierden los datos gracias a nuestra base de datos de alta gama 100% transaccional y gratuita, escalable a futuros cambios que demande el entorno empresarial y tecnológico.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mb-3 mt-3 d-flex justify-content-center">
          <div className="card text-center">
            <div className="container">
              <p className="card__title mb-5">RESPALDO EN LÍNEA</p>
              <p className="card__description">
                Olvídate por hacer respaldos diarios/semanales/mensuales Prediction SOFTware MR respalda a una base de datos en paralelo a otra nube en tiempo real sin afectar tu performance de velocidad delegando como un proceso alterno ajeno al núcleo del sistema, puedes estar tranquilo el sistema lo hará por ti por cualquier contingencia tu información está en modo espejo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PorQuePrediction;
