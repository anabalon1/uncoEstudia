import React, { Component } from 'react';

export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      nombre:'',
      apellido:'',
      userName:'',
      email: '',
      password: ''
    };
  }

  onChangeNombre = (n) => {
    this.setState({
      nombre: n.target.value
    })
  }

  onChangeApellido = (a) => {
    this.setState({
      apellido: a.target.value
    })
  }
  onChangeUserName = (u) => {
    this.setState({
      userName: u.target.value
    })
  }

  onChangeEmail = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  onChangePwd = (p) => {
    this.setState({
      password: p.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:8080/api/register', {
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
        alert('Error registro');
      });
  }

  render() {
    return (

      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                <h5 className="card-title text-center">Registro</h5>
                <form className="form-signin" onSubmit={this.onSubmit}>
                
                <div className="form-label-group">
                <label for="inputEmail">Nombre </label>
                    <input 
                    id="nombre"
                    name="nombre" 
                    type="text" 
                    placeholder="Nombre" 
                    className="form-control" 
                    onChange={this.onChangeNombre}/>
                    
                  </div>

                  <div className="form-label-group">
                  <label for="inputApellido">Apellido </label>
                    <input 
                    id="apellido"
                    name="apellido" 
                    type="text" 
                    placeholder="Apellido" 
                    className="form-control" 
                    onChange={this.onChangeApellido}/>
                   
                  </div>

                  <div className="form-label-group">
                  <label for="inputApellido">nombre de usuario </label>
                    <input 
                    id="userName"
                    name="userName" 
                    type="text" 
                    placeholder="nombre de usuario" 
                    className="form-control" 
                    onChange={this.onChangeUserName}
                    required/>
                    
                  </div>

                  <div className="form-label-group">
                  <label for="inputEmail">Email </label>
                    <input 
                    id="email"
                    name="email" 
                    type="text" 
                    placeholder="ejemplo@ejemplo.com" 
                    className="form-control" 
                    onChange={this.onChangeEmail}
                    required/>
                    
                  </div>

                  <div className="form-label-group">
                  <label for="inputPassword">Password</label>
                    <input 
                      id="pwd" 
                      name="password" 
                      type="password"
                      placeholder="password" 
                      className="form-control" 
                      onChange={this.onChangePwd}
                      required/>
                    
                  </div>

                  <button 
                    className="btn btn-lg btn-primary btn-block text-uppercase" 
                    type="submit">
                      Registrar
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