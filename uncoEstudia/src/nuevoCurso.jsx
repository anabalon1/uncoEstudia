import React, { Component } from 'react';

export default class NuevoCurso extends Component {
  constructor() {
    super();
    this.state = {
      titulo: '',
      descripcion: '',
      valor:''
    };
  }

  onChangeTitulo = (t) => {
    this.setState({
      titulo: t.target.value
    })
  }

  onChangeDescripcion = (d) => {
    this.setState({
      descripcion: d.target.value
    })
  }
  onChangeValor = (v) => {
    this.setState({
      valor: v.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:8080/api/newCurso', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (res.status === 200) {
          this.props.history.push('/');
        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch(err => {
        console.error(err);
        alert('Error al cargar el curso');
      });
  }

  render() {
    return (

      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                <h5 className="card-title text-center">Nuevo curso</h5>
                <form className="form-signin" onSubmit={this.onSubmit}>
                  <div className="form-label-group">
                    <input 
                    id="titulo"
                    name="titulo" 
                    type="text" 
                    placeholder="curso de ingles basico" 
                    className="form-control" 
                    onChange={this.onChangeTitulo}/>
                    <label for="inputTitulo">titulo </label>
                  </div>

                  
                  <div className="form-label-group">
                    <input 
                      id="descripcion" 
                      name="descripcion" 
                      type="text"
                      placeholder="curso avanzado de...." 
                      className="form-control" 
                      onChange={this.onChangeDescripcion}/>
                    <label for="inputDescrip">descripcion</label>
                  </div>

                  <div className="form-label-group">
                    <input 
                      id="valor" 
                      name="valor" 
                      type="text"
                      placeholder="99" 
                      className="form-control" 
                      onChange={this.onChangeValor}/>
                    <label for="inputDescrip">valor</label>
                  </div>

                  <button 
                    className="btn btn-lg btn-primary btn-block text-uppercase" 
                    type="submit">
                      Cargar curso
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>



    )
  }
}