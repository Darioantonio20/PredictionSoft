import ImganeLogoFooter from "../../assets/img/logoSinFondo.svg";
import IconoLogoPequeno from "../../assets/img/iconoPequenoLogo.svg";
import IconoFacebook from "../../assets/img/iconoFacebook.svg";
import IconoTiktok from "../../assets/img/iconoTiktok.svg";
import IconoPhone from "../../assets/img/iconoPhone.svg";
import IconoLetter from "../../assets/img/iconoLetter.svg";
import IconoLocation from "../../assets/img/iconoLocation.svg";
import "../../assets/style/Footer.css";

function Footer() {
    return ( 
        <>
            <footer className="text-center text-lg-start colorFondo">
                <div className="container p-4 ">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <div>
                                <img className="img-fluid" alt="Logo" loading="lazy" src={ImganeLogoFooter}/>
                            </div>
                            <ul className="list-unstyled mt-4 mb-0">
                                <li>
                                    <h5><img className="img-fluid" loading="lazy" src={IconoPhone}/> 961 366 2079</h5>
                                </li>
                                <li>
                                    <p><img className="img-fluid" loading="lazy" src={IconoLetter}/> ventas@predictionsoft</p>
                                </li>
                                <li>
                                    <p><img className="img-fluid" loading="lazy" src={IconoLocation}/> Calzada Zoomat 130. Col. Francisco <br/>y Madero. Tuxtla Gutiérrez. Chiapas.</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0 mt-3">
                            <h3 className="text-uppercase mb-4">POLÍTICAS Y TÉRMINOS</h3>
                            <ul className="list-unstyled">
                                <li>
                                    <p><img className="img-fluid" loading="lazy" src={IconoLogoPequeno}/> Términos y condiciones.</p>
                                </li>
                                <li>
                                    <p><img className="img-fluid" loading="lazy" src={IconoLogoPequeno}/> Aviso de privacidad.</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0 mt-3">
                            <h3 className="text-uppercase mb-4">NUESTROS <br/> SERVICIOS</h3>
                            <ul className="list-unstyled">
                                <li>
                                    <p><img className="img-fluid" loading="lazy" src={IconoLogoPequeno}/> Asesoría de sistemas.</p>
                                </li>
                                <li>
                                    <p><img className="img-fluid" loading="lazy" src={IconoLogoPequeno}/> Desarrollo de software.</p>
                                </li>
                                <li>
                                    <p><img className="img-fluid" loading="lazy" src={IconoLogoPequeno}/> Soporte técnico especializado.</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0 mt-3">
                            <h3 className="text-uppercase mb-4">NUESTRAS REDES SOCIALES</h3>
                            <ul className="list-unstyled">
                                <li>
                                    <p><img className="img-fluid" alt="Incono Pequeño" loading="lazy" src={IconoLogoPequeno}/> Síguenos y forma parte de la comunidad Prediction.</p>
                                </li>
                                <li className="mt-4">
                                    <p><a href="https://www.facebook.com/Software.Prediction" target="_blank"><img className="img-fluid" alt="Icono Facebook" loading="lazy" src={IconoFacebook}/></a><img className="img-fluid" alt="Icono Tiktok" loading="lazy" src={IconoTiktok}/>predictionsoft</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="text-center p-3 colorCopyRight">
                © Copyright Prediction Todos los derechos reservados.
            </div>
        </>
     );
}

export default Footer;