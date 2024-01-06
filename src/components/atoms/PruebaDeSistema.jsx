import "../../assets/style/PruebaDeSistema.css";

function PruebaDeSistema() {
    return ( 
        <>
            <div id="cotizar"/>
            <div className="p-0 pt-2 pb-2 text-center mt-5 mb-5 colorFondoPruebaDeSistema">
                <h1 className="colorTituloPruebaDeSistema animate__animated animate__bounceInDown">PRUEBA NUESTRO SISTEMA COMO PRUEBA DEMO</h1>
                <h3 className="textoPruebaDeSistema">Ingrese su correo eléctronico si deseas recibir una demostración</h3>
                <h3 className="textoPruebaDeSistema">TOTALMENTE GRATIS</h3>
                <div className="row justify-content-center">
                    <div className="col-8 d-flex align-items-end justify-content-center">
                        <div data-mdb-input-init className="form-outline w-100 me-3">
                            <input type="text" id="form3Example2" className="form-control text-center mb-2"/>
                        </div>
                        <button className="button text-bg-dark">Enviar</button>
                    </div>
                </div>         
            </div>
        </>
     );
}

export default PruebaDeSistema;