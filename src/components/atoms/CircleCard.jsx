import ImgSection2 from "../../assets/img/imgSection2.png";

function CircleCard() {
    return ( 
        <>
            <div className="container-fluid p-0">
                <div className="row justify-content-center">
                    <div className="col-md-12 p-0">
                        <img src={ImgSection2} loading="lazy"className="img-fluid" style={{ width: '100%' }} alt="Imagen 1 Section 2" />
                    </div>
                </div>
            </div>
        </>
     );
}

export default CircleCard;