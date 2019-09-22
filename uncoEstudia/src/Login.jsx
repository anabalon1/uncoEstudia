import React, { Component } from 'react';

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email : '',
      password: ''
    };
  }

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
    fetch('/api/authenticate', {
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
      alert('Error logging in please try again');
    });
  }

  render() {
    return (

      <div className="container">
    <div className="row">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card card-signin my-5">
          <div className="card-body">
            <h5 className="card-title text-center">Iniciar session</h5>
            <form className="form-signin" onSubmit={this.onSubmit}>
              <div className="form-label-group">
                <input 
                  type="email" 
                  id="inputEmail" 
                  name="email"
                  className="form-control" 
                  placeholder="Email" 
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  required/>
                <label for="inputEmail">Email </label>
              </div>

              <div className="form-label-group">
                <input 
                  type="password" 
                  name="password"
                  id="inputPassword" 
                  className="form-control" 
                  placeholder="Password" 
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  required/>
                <label for="inputPassword">Password</label>
              </div>

              
              <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Ingresar</button>
              
              
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

      
    );
  }
}