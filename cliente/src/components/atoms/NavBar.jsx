/**
 * The above code is a React component that renders a navigation bar with links to different sections
 * of a website.
 */
import React from 'react';
import Swal from 'sweetalert2';
import "../../assets/style/NavBar.css";
import LogoPredictionSoft from "../../assets/img/logoPredictionSoft.svg";
import { Link } from 'react-router-dom';

function NavBar() {
    /**
     * The handleClick function prevents the default behavior of an event and displays an info message
     * using the Swal.fire method.
     */


    const handleClickProximamente = (e) => {
        e.preventDefault();
        Swal.fire({
            icon: 'info',
            title: 'Próximamente',
        });
    };

    return (
        <>
            {/*The code you provided is a React component that renders a navigation bar.*/}
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <div id="arriba" />
                <div className="container-fluid">
                    <Link to="/"><a className="navbar-brand" href="#">
                        <img src={LogoPredictionSoft} className="img-fluid" loading="lazy" alt="Img Prediction Soft" width={200} height={200} />
                    </a></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="nav nav-underline">
                            <li className="nav-item mx-2">
                                <Link to="/"><a className="nav-link" href="#">INICIO</a></Link>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href="#nosotros">NOSOTROS</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" onClick={handleClickProximamente}>MÓDULOS ERP</a>  {/*download="imgNosotros.jpg"*/}
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href="#cotizar">COTIZAR</a>
                            </li>
                            <li className="nav-item mx-2">
                                <Link to="/promociones"><a className="nav-link">PROMOCIONES</a></Link>
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