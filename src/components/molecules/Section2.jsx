import ImgSection2 from "../../assets/img/imgSection2.png";
import Img3Section2 from "../../assets/img/img3Section2.png";
import Img4Section2 from "../../assets/img/img4Section2.jpg";
import IconoLocation from "../../assets/img/iconoLocation.svg";
import IconoPhone from "../../assets/img/iconoPhone.svg";
import IconoLetter from "../../assets/img/iconoLetter.svg";
import "../../assets/style/Section2.css";

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
                <div className="bg-info p-0 pt-2 pb-2">
                    <h1 className="text-center text-light">¿POR QUE ELEGIR PREDICTION?</h1>
                </div>
                <div className="container-fluid p-0 ">
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
                </div><br></br>
                <div className="bg-info p-0 pt-2 pb-2">
                    <h1 className="text-center text-light">INICIA TU COTIZACIÓN AQUÍ</h1>
                    <h3 className="text-center text-light">Déjanos tus datos de contacto, nos comunicaremos contigo a la brevedad.</h3>
                </div>
                <div className="row">
                    <div className="col-5 mb-5 mt-5">
                        <div className="row">
                            <div className="col-1 mt-5">
                                <img className="img-fluid float-md-end" loading="lazy" src={IconoLocation}/>
                            </div>
                            <div className="col-5">
                                <h2>UBICACIÓN:</h2>
                                <p>Calzada Zoomat 130. Col. Francisco <br/>y Madero. Tuxtla Gutiérrez. Chiapas.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-1 mt-5">
                                <img className="img-fluid float-md-end" loading="lazy" src={IconoLetter}/>
                            </div>
                            <div className="col-5">
                                <h2>EMAIL:</h2>
                                <p>ventas@predictionsoft</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-1 mt-5">
                                <img className="img-fluid float-md-end" loading="lazy" src={IconoPhone}/>
                            </div>
                            <div className="col-5">
                                <h2>WHATSAPP:</h2>
                                <p>961 366 2079</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-7">
                        <div className="row">
                            <div className="col-6">
                                <input className="estiloInput" type="text" placeholder="Tu nombre." />
                            </div>
                            <div className="col-6">
                                <input className="estiloInput" type="mail" placeholder=" Email." />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <input className="estiloInput" type="text" placeholder="Asunto." />
                            </div>
                            <div className="col-6">
                                <input className="estiloInput" type="mail" placeholder="Teléfono." />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <input className="estiloInput" type="text" placeholder="Mensaje." />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
     );
}

export default Section2;