/* The code you provided is a React component called `CircleCard`. */
import ImgSection2 from "../../assets/img/imgHeroPrediction.png";
import "../../assets/style/CircleCard.css";

function CircleCard() {
    return (
        <>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-md-12 mt-1">
                        <img
                            src={ImgSection2}
                            loading="lazy"
                            className="img-fluid"
                            alt="Imagen 1 Section 2"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default CircleCard;
