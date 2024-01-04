import ImgNosotros from "../../assets/img/imgNosotros.png";

function Nosotros() {
    return ( 
        <>
            <div className="bg-info p-0 pt-2 pb-2">
                <h1 className="text-center text-light">NOSOTROS</h1>
            </div>
            <div className="container-fluid p-0">
                <div className="row justify-content-center">
                    <div className="col-md-12 p-0">
                        <img src={ImgNosotros} loading="lazy"className="img-fluid" style={{ width: '100%' }} alt="Imagen Nosotros" />
                    </div>
                </div>
            </div>
        </>
     );
}

export default Nosotros;