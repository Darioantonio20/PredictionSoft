import ImgMomentoERP from "../../assets/img/imgMomentosERP.png";


function MomentoERP() {
  return (
    <div className="container-fluid p-0 mt-3 mb-3">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <img
            src={ImgMomentoERP}
            loading="lazy"
            className="img-fluid max-width-img imagencita"
            alt="Imagen Nosotros"
          />
        </div>
      </div>
    </div>
  );
}

export default MomentoERP;
