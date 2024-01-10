import ImgSection2 from "../../assets/img/imgHeroPrediction.png";
import "../../assets/style/CircleCard.css";

function CircleCard() {
    return ( 
        <>
            <div className="container-fluid p-0">
                <div className="row justify-content-center contenedorImagenHero">
                    <div className="col-md-12 p-0 mt-5">
                        <img src={ImgSection2} loading="lazy" className="img-fluid"  alt="Imagen 1 Section 2" />
                    </div>
                </div>
            </div>
        </>
     );
}

export default CircleCard;