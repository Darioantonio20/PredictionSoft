/**
 * The "Nosotros" function is a React component that renders a section about "us" with a heading and an
 * image.
 * @returns The component `Nosotros` is being returned.
 */
import ImgNosotros from "../../assets/img/imgNosotros.jpg";

function Nosotros() {
    return (
        <>
            <div id="nosotros" />
            <div className="bg-info p-0 pt-2 pb-2">
                <h1 className="text-center text-light animate__animated animate__bounceInDown">NOSOTROS</h1>
            </div>
            <div className="container-fluid p-0">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <img src={ImgNosotros} loading="lazy" className="img-fluid" alt="Imagen Nosotros" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Nosotros;