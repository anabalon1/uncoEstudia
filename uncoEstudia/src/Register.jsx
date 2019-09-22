import React, { Component } from 'react';

export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
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
                    <input 
                    id="email"
                    name="email" 
                    type="text" 
                    placeholder="ejemplo@ejemplo.com" 
                    className="form-control" 
                    onChange={this.onChangeEmail}/>
                    <label for="inputEmail">Email </label>
                  </div>

                  <div className="form-label-group">
                    <input 
                      id="pwd" 
                      name="password" 
                      type="password"
                      placeholder="password" 
                      className="form-control" 
                      onChange={this.onChangePwd}/>
                    <label for="inputPassword">Password</label>
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