import ImgSection2 from "../../assets/img/imgSection2.png";
import Img3Section2 from "../../assets/img/img3Section2.png";
import Img4Section2 from "../../assets/img/img4Section2.jpg";

function Section2() {
    return ( 
        <>
            <section>
                <div className="container-fluid p-0">
                    <div className="row justify-content-center">
                        <div className="col-md-12 p-0">
                            <img src={ImgSection2} loading="lazy"className="img-fluid" style={{ width: '100%' }} alt="Imagen 1 Section 2" />
                        </div>
                    </div>
                </div>
                <div className="text-center mt-5 mb-3">
                    <h2>¿POR QUE ELEGIR PREDICTION?</h2>
                </div>
                    <div className="container-fluid p-0">
                        <div className="row justify-content-center">
                            <div className="col-md-12 p-0">
                                <img src={Img3Section2} loading="lazy" className="img-fluid" style={{ width: '100%' }} alt="Imagen 2 Section 2" />
                            </div>
                        </div>
                    </div>
                <div className="bg-info p-0 pt-2 pb-2">
                    <h1 className="text-center text-light">NOSOTROS</h1>
                </div>
                <div className="container-fluid p-0">
                        <div className="row justify-content-center">
                            <div className="col-md-12 p-0">
                                <img src={Img4Section2} loading="lazy" className="img-fluid" style={{ width: '100%' }} alt="Imagen 3 Section 2" />
                            </div>
                        </div>
                    </div>
                <div className="bg-info p-0 pt-2 pb-2">
                    <h1 className="text-center text-light">BENEFICIOS</h1>
                </div>
            </section>
        </>
     );
}

export default Section2;