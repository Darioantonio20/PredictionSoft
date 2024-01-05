import React from 'react';
import "../../assets/style/Card.css";
import IconoHombre from "../../assets/img/iconoHombre.png";
import iconoMujer from "../../assets/img/iconoMujer.png";

function PorQuePrediction() {
  return (
    <>
        <div className="bg-info p-0 pt-2 pb-2">
            <h1 className="text-center text-light">¿POR QUE ELEGIR PREDICTION?</h1>
        </div>
        <div class="row mb-5">
            <div class="col-lg-4 col-md-6 col-sm-12 mb-3 mt-3 d-flex justify-content-center">
                <div class="card text-center">
                    <img src={IconoHombre} class="img-fluid" loading="lazy" width={100} height={100}/>
                    <div class="card__content">
                        <p class="card__title">COMPRAS E INVENTARIOS</p>
                        <p class="card__description">Facilita la integración de tus procesos de: ventas, compras, inventarios, multialmacenes, cuentas por cobrar, cuentas por pagar.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 mb-3 mt-3 d-flex justify-content-center">
                <div class="card text-center">
                    <img src={iconoMujer} class="img-fluid" loading="lazy" width={100} height={100}/>
                    <div class="card__content">
                        <p class="card__title">ESTABILIDAD</p>
                        <p class="card__description">Se ha logrado crear un sistema en un 99% libre de errores de programación interna. Confía en los mejoras.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 mb-3 mt-3 d-flex justify-content-center">
                <div class="card text-center">
                    <img src={IconoHombre} class="img-fluid" loading="lazy" width={100} height={100}/>
                    <div class="card__content">
                        <p class="card__title">CONSISTENCIA</p>
                        <p class="card__description">Datos 100% transaccional. Tu información en base de datos de ultima generación Firebird 3.0 Olvídate de perder información.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 mb-3 mt-3 d-flex justify-content-center">
                <div class="card text-center">
                    <img src={iconoMujer} class="img-fluid" loading="lazy" width={100} height={100}/>
                    <div class="card__content">
                        <p class="card__title">FACTURACIÓN ELECTRONÓNICA 4.0</p>
                        <p class="card__description">Facturazión electrónica respaldada por Sifei, un PAC autorizado por el SAT.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 mb-3 mt-3 d-flex justify-content-center">
                <div class="card text-center">
                    <img src={IconoHombre} class="img-fluid" loading="lazy" width={100} height={100}/>
                    <div class="card__content">
                        <p class="card__title">SISTEMA ONLINE</p>
                        <p class="card__description">Obtén información VITAL en tiempo y forma para la toma de decisiones en tu empresa.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 mb-3 mt-3 d-flex justify-content-center">
                <div class="card text-center">
                    <img src={iconoMujer} class="img-fluid" loading="lazy" width={100} height={100}/>
                    <div class="card__content">
                        <p class="card__title">SEGURIDAD DE LA INFORMACIÓN</p>
                        <p class="card__description">Respalda en línea cada una de tus transacciones que realices en tu empresa, logrando que en caso de desastres: Robo, falla técnica de tu server, etc. Garantizamos la seguridad de tu información.</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default PorQuePrediction;