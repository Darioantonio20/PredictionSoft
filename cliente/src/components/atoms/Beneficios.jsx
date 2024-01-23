/**
 * The `Beneficios` function is a React component that renders a section with a title and an image.
 * @returns The `Beneficios` component is returning a JSX fragment containing a `div` with a background
 * color of "info" and some padding and margin. Inside this `div`, there is an `h1` element with the
 * text "BENEFICIOS".
 */
import Img4Section2 from "../../assets/img/img4Section2.png";

function Beneficios() {
    return (
        <>
            <div className="bg-info p-0 pt-2 pb-2 mt-5 mb-5">
                <h1 className="text-center text-light animate__animated animate__bounceInDown">BENEFICIOS</h1>
            </div>
            <div className="container-fluid p-0">
                <div className="row justify-content-center">
                    <div className="col-md-12 d-flex justify-content-center align-items-center mt-3 mb-3">
                        <img src={Img4Section2} loading="lazy" className="img-fluid max-width-img" alt="Imagen 3 Section 2" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Beneficios;