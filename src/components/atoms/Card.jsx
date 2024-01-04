import "../../assets/style/Card.css";
import IconoHombre from "../../assets/img/iconoHombre.png";
import iconoMujer from "../../assets/img/iconoMujer.png";

function Card() {
    return ( 
        <>
        <div className="text-center mt-5 mb-5">
            <h1>CASOS DE ÉXITO</h1>
        </div>
            <div class="row mb-5">
                <div class="col-sm-6 mb-3 mb-sm-0 d-flex justify-content-center">
                    <div class="card text-center">
                        <img src={IconoHombre} class="img-fluid" loading="lazy" width={100} height={100}/>
                        <div class="card__content">
                            <p class="card__title">MARCELO TORRES.</p>
                            <p class="card__description">Prediction Soft es un sistema súper completo que me ha ayudado en los procesos de mis ventas, es mi mejor aliado para administrar mi negocio.</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 d-flex justify-content-center">
                    <div class="card text-center">
                        <img src={iconoMujer} class="img-fluid" loading="lazy" width={100} height={100}/>
                        <div class="card__content">
                            <p class="card__title">SUSANA SÁNCHEZ.</p>
                            <p class="card__description">Tener un sistema en la nube siempre es un beneficio, es por eso que recomiendo Prediction Soft ya que gracias a este sistema he podido hacer mi negocio.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}

export default Card;