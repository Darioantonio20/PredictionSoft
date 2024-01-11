import "../../assets/style/NavBar.css";
import LogoPredictionSoft from "../../assets/img/logoPredictionSoft.svg";

function NavBar() {
   
  return (
    <>
        <nav className="navbar navbar-expand-md navbar-light bg-light">
            <div id="arriba" />
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={LogoPredictionSoft} className="img-fluid" loading="lazy" alt="Img Prediction Soft"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="nav nav-underline">
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="#">INICIO</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="#nosotros">NOSOTROS</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="#video">MÓDULOS ERP</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="#cotizar">COTIZAR</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="#">PROMOCIONES</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="#contacto">CONTACTO</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  );
};


export default NavBar;