import ImgMomentoERP from "../../assets/img/imgMomentosERP.png";
 
function MomentoERP() {
    return ( 
        <>
           <div className="container-fluid p-0">
                <div className="row justify-content-center">
                    <div className="col-md-12 p-0">
                        <img src={ImgMomentoERP} loading="lazy"className="img-fluid" style={{ width: '100%' }} alt="Imagen Nosotros" />
                    </div>
                </div>
            </div>
        </>
     );
}

export default MomentoERP;