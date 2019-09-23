import React, { Component } from 'react';
import axios from  'axios'
import { Link} from 'react-router-dom';
import Inicio from './componentes/inicio/inicio';


export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      cursos : []
    }
  }
  
  async componentDidMount(){
     const res = await axios.get("http://localhost:8080/api/getCursos");
     console.log(res.data);
     this.setState({cursos: res.data});
     if(res.data.length > 0){

     }
     
     
  }
  
  render() {
    return (
      <div>
        <Inicio></Inicio>    
        <section className="wow fadeIn" style={{visibility: 'visible', animationName: 'fadeIn'}}>
          <div className="container">
              <div className="row">
                  <div className="col-12 col-xl-5 col-md-8 margin-eight-bottom md-margin-40px-bottom sm-margin-30px-bottom text-center">
                      <h5 className="alt-font font-weight-700 text-extra-dark-gray margin-20px-bottom text-uppercase">Tendencias</h5>
                  </div>  
              </div>
              <div className="row">
              <div className="col-xs-12 col-md-3" >
                <Link to="/nuevoCurso"> <button  className="btn btn-primary">+Curso</button></Link>
                      { 
                        this.state.cursos.map(curso =>
                        <div className="card"  key= {curso._id} >
                        <div className="card-body">
                          <h5 className="card-title">{curso.titulo}</h5>
                            <p className="card-text">{curso.descripcion}</p>
                              <button className="btn btn-primary">${curso.valor} Comprar</button>
                      </div>
                      </div>)
                      }
                </div>
              </div>
          </div>
        </section>
        <section className="wow fadeIn parallax sm-background-image-center padding-nineteen-bottom sm-padding-50px-bottom" data-stellar-background-ratio="0.5" style={{backgroundImage: "url('https://images.pexels.com/photos/1437908/pexels-photo-1437908.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')", visibility: 'visible', animationName: 'fadeIn'}}>
            <div className="opacity-extra-medium bg-black"></div>
            <div className="container-fluid padding-thirteen-lr lg-padding-six-lr position-relative sm-padding-15px-lr">
                <div className="row justify-content-center">
                    <div className="col-12 col-xl-6 col-lg-8 text-center">
                        <h4 className="text-white-2 alt-font font-weight-300 sm-margin-5px-bottom">Encuentra la <strong>categoría</strong> que mas quieras desarrollar</h4>
                    </div>
                </div>    
            </div>
        </section>
        <section className="wow fadeIn overlap-section no-padding-top z-index-5" style={{visibility: 'visible', animationName: 'fadeIn'}}>
            <div className="container-fluid padding-thirteen-lr lg-padding-six-lr sm-no-padding-lr">
                <div className="row">    
                    <div className="col-12">
                        <div className="bg-medium-light-gray gridblock-main float-left w-100">
                            <ul className="gridblock-list p-0 m-0">
                                <li className="margin-ten-bottom md-margin-six-bottom sm-margin-10px-bottom"><a href="https://envato.com" target="_blank" rel="noopener noreferrer"><img src="https://www.themezaa.com/html/pofo/images/logo-7.png" alt="" data-no-retina="" /></a></li>
                                <li className="margin-ten-bottom md-margin-six-bottom sm-margin-10px-bottom"><a href="https://woocommerce.com" target="_blank" rel="noopener noreferrer"><img src="https://www.themezaa.com/html/pofo/images/logo-8.png" alt="" data-no-retina="" /></a></li>
                                <li className="margin-ten-bottom md-margin-six-bottom sm-margin-10px-bottom"><a href="https://wordpress.com" target="_blank" rel="noopener noreferrer"><img src="https://www.themezaa.com/html/pofo/images/logo-5.png" alt="" data-no-retina="" /></a></li>
                                <li className="margin-ten-bottom md-margin-six-bottom sm-margin-10px-bottom"><a href="https://magento.com" target="_blank" rel="noopener noreferrer"><img src="https://www.themezaa.com/html/pofo/images/logo-4.png" alt="" data-no-retina="" /></a></li>
                                <li className="margin-ten-bottom md-margin-six-bottom sm-margin-10px-bottom"><a href="http://sass-lang.com/" target="_blank" rel="noopener noreferrer"><img src="https://www.themezaa.com/html/pofo/images/logo-6.png" alt="" data-no-retina="" /></a></li>
                                <li className="margin-ten-bottom md-margin-six-bottom sm-margin-10px-bottom"><a href="http://sass-lang.com/" target="_blank" rel="noopener noreferrer"><img src="https://www.themezaa.com/html/pofo/images/logo-3.png" alt="" data-no-retina="" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>    
            </div>
        </section>
      </div>
    );
  }
}
/*
<div className="row">
<div className="col-md-8">
  <h1>IMAGENES / TEXTO</h1>
</div>

<div className="col-xs-12 col-md-3" >
<Link to="/nuevoCurso"> <button  className="btn btn-primary">+Curso</button></Link>
      { 
        this.state.cursos.map(curso =>
        <div className="card"  key= {curso._id} >
        <div className="card-body">
          <h5 className="card-title">{curso.titulo}</h5>
            <p className="card-text">{curso.descripcion}</p>
              <button className="btn btn-primary">${curso.valor} Comprar</button>
      </div>
      </div>)
      }
</div>
</div>*/