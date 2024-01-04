import Img4Section2 from "../../assets/img/img4Section2.jpg";

function Beneficios() {
    return ( 
        <>
            <div className="bg-info p-0 pt-2 pb-2">
                <h1 className="text-center text-light">BENEFICIOS</h1>
            </div>
            <div className="container-fluid p-0">
                <div className="row justify-content-center">
                    <div className="col-md-12 p-0">
                        <img src={Img4Section2} loading="lazy" className="img-fluid" style={{ width: '100%' }} alt="Imagen 3 Section 2" />
                    </div>
                </div>
            </div>
        </>
     );
}

export default Beneficios;