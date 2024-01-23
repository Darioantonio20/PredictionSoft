/* The code is importing an image file named "img3Section2.jpeg" from the "../../assets/img/"
directory. It then uses the imported image as the source for an `<img>` element within the
`ImplementacionPrediction` component. The image is displayed with the `img-fluid` class, and the
`alt` attribute is set to "Imagen 2 Section 2". */
import Img3Section2 from "../../assets/img/img3Section2.png";

function ImplementacionPrediction() {
    return (
        <>
            <div className="container-fluid p-0">
                <div className="row justify-content-center">
                    <div className="col-md-12 mt-5 mb-5">
                        <img src={Img3Section2} loading="lazy" className="img-fluid" alt="Imagen 2 Section 2" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ImplementacionPrediction;