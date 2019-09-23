import React from 'react';
import fondo from '../../home-fondo.jpg'
// import logo from '../../logo.svg'; 
import './inicio.css';

class Inicio extends React.Component {
  render() {
    return (
        <section className="wow fadeIn p-0 parallax sm-background-image-center backgroundImagen" data-stellar-background-ratio="0.5" style={{visibility:' visible', animationName: 'fadeIn',backgroundImage: "url("+fondo+")"}}>
            <div className="container full-screen position-relative" style={{minHeight:' 722px'}}>
                <div className="slider-typography">
                    <div className="slider-text-middle-main">
                        <div className="slider-text-middle lg-padding-15px-lr">
                            <div className="col-12 col-xl-7 col-md-10 offset-md-1 text-center text-lg-left bg-white-opacity padding-seven-all lg-padding-ten-all">
                                <div className="alt-font text-extra-dark-gray text-uppercase font-weight-700 letter-spacing-minus-2 title-large">Construye tu camino</div>
                                <div className="separator-line-horrizontal-full w-100 margin-35px-tb md-margin-25px-tb sm-margin-20px-tb bg-extra-dark-gray"></div>
                                <span className="text-dark-gray text-extra-large font-weight-300 margin-35px-bottom d-block md-margin-25px-bottom sm-margin-15px-bottom">Potencia tus habilidades con nuestros cursos y formaciones</span>
                                <a href="https://themeforest.net/item/pofo-creative-agency-corporate-and-portfolio-multipurpose-template/20645944?ref=themezaa" target="_blank" rel="noopener noreferrer" className="btn btn-dark-gray btn-medium">Comenzar</a>
                            </div>
                        </div>
                        <div className="down-section text-center">
                            <a href="#why" className="section-link up-down-ani"><i className="ti-mouse icon-small bounce text-deep-pink"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}

export default Inicio;