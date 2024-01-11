import ImgMatrix from "../../assets/img/imgMatrix.png";
import "../../assets/style/Card.css";

function Card() {
  return (
    <>
      <div className="text-center mt-5 mb-5 p-0">
        <h1 className="animate__animated animate__bounceInDown">
          CASOS DE ÉXITO
        </h1>
      </div>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row mb-5">
              <div className="col-sm-6 mb-6 mb-sm-0 d-flex justify-content-center">
                <div className="cardCasosDeExitos text-center">
                  <div className="cardCasosDeExitos">
                    <div className="cardCasosDeExitos-inner">
                      <div className="cardCasosDeExitos-front">
                        <img src={ImgMatrix} className="img container-fluid"/>
                      </div>
                      <div className="cardCasosDeExitos-back">
                        <p>Llanteras Matrix</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 mb-6 mb-sm-0 d-flex justify-content-center">
                <div className="cardCasosDeExitos">
                  <div className="cardCasosDeExitos-inner">
                    <div className="cardCasosDeExitos-front">
                      <p>Front Side</p>
                    </div>
                    <div className="cardCasosDeExitos-back">
                      <p>Back Side</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row mb-5">
              <div className="col-sm-6 mb-6 mb-sm-0 d-flex justify-content-center">
                <div className="cardCasosDeExitos text-center">
                  <div className="cardCasosDeExitos">
                    <div className="cardCasosDeExitos-inner">
                      <div className="cardCasosDeExitos-front">
                        <p>Front Side</p>
                      </div>
                      <div className="cardCasosDeExitos-back">
                        <p>Back Side</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 mb-6 mb-sm-0 d-flex justify-content-center">
                <div className="cardCasosDeExitos">
                  <div className="cardCasosDeExitos-inner">
                    <div className="cardCasosDeExitos-front">
                      <p>Front Side</p>
                    </div>
                    <div className="cardCasosDeExitos-back">
                      <p>Back Side</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row mb-5">
              <div className="col-sm-6 mb-6 mb-sm-0 d-flex justify-content-center">
                <div className="cardCasosDeExitos text-center">
                  <div className="cardCasosDeExitos">
                    <div className="cardCasosDeExitos-inner">
                      <div className="cardCasosDeExitos-front">
                        <p>Front Side</p>
                      </div>
                      <div className="cardCasosDeExitos-back">
                        <p>Back Side</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 mb-6 mb-sm-0 d-flex justify-content-center">
                <div className="cardCasosDeExitos">
                  <div className="cardCasosDeExitos-inner">
                    <div className="cardCasosDeExitos-front">
                      <p>Front Side</p>
                    </div>
                    <div className="cardCasosDeExitos-back">
                      <p>Back Side</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="custom-carousel-control carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="custom-carousel-icon carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="custom-carousel-control carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="custom-carousel-icon carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden text-danger">Next</span>
        </button>
      </div>
    </>
  );
}

export default Card;
