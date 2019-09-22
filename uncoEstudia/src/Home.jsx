import React, { Component } from 'react';
import axios from  'axios'
import { Link} from 'react-router-dom';


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
      </div>
    );
  }
}