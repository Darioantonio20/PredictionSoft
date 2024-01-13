/**
 * The `MomentoERP` function returns a React component that displays an image.
 * @returns The MomentoERP component is returning a div element with a row and column inside. Inside
 * the column, there is an image element with the source set to the ImgMomentoERP variable, which is
 * imported from the "../../assets/img/imgMomentosERP.png" file. The image has the "img-fluid" class
 * applied to it and an alt attribute set to "Imagen Nosotros".
 */
import ImgMomentoERP from "../../assets/img/imgMomentosERP.png";

function MomentoERP() {
  return (
    <div className="container-fluid p-0 ">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <img src={ImgMomentoERP} loading="lazy" className="img-fluid" alt="Imagen Nosotros" />
        </div>
      </div>
    </div>
  );
}

export default MomentoERP;
