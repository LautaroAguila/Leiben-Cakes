import React from "react";
import Torta1 from "../Carousel/Carousel/Torta (1).jpg"
import Torta2 from "../Carousel/Carousel/Torta (2).png"
import Torta3 from "../Carousel/Carousel/Torta (3).png"
import Torta4 from "../Carousel/Carousel/Torta (4).png"
import Torta5 from "../Carousel/Carousel/Torta (5).jpg"
import Torta6 from "../Carousel/Carousel/Torta (6).png"
import './Carousel.css'

function Carousel() {
    return (
        <div id="Inicio" >
            <div id="carouselExample" className="carousel slide tam-car">
                <div className="carousel-inner">
                    <div className="carousel-item active tam-car-it">
                        <img src={Torta4}className="d-block w-100 im-car" alt="..." style={{ maxWidth: "95%",maxHeight: "750px", margin: "auto" }} />
                    </div>
                    <div className="carousel-item tam-car-it">
                        <img src={Torta2} className="d-block w-100 im-car" alt="..." style={{ maxWidth: "95%",maxHeight: "750px", margin: "auto" }} />
                    </div>
                    <div className="carousel-item tam-car-it">
                        <img src={Torta1}  className="d-block w-100 im-car" alt="..." style={{ maxWidth: "95%",maxHeight: "750px", margin: "auto" }} />
                    </div>
                    <div className="carousel-item tam-car-it">
                        <img src={Torta3} className="d-block w-100 im-car" alt="..." style={{ maxWidth: "95%",maxHeight: "750px", margin: "auto" }} />
                    </div>
                    <div className="carousel-item tam-car-it">
                        <img src={Torta5} className="d-block w-100 im-car" alt="..." style={{ maxWidth: "95%",maxHeight: "750px", margin: "auto" }} />
                    </div>
                    <div className="carousel-item tam-car-it">
                        <img src={Torta6} className="d-block w-100 im-car" alt="..." style={{ maxWidth: "95%",maxHeight: "750px", margin: "auto" }} />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
export default Carousel;