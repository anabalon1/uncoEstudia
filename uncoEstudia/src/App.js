import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import withAuth from './withAuth';
import Home from './Home';
import Login from './Login';
import NuevoCurso from './nuevoCurso'
import 'bootstrap/dist/css/bootstrap.css';
import Register from './Register';

class App extends Component {
  render() {
    return (
   
      <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      
      <Link to="/" className="navbar-brand">UncoEstudia</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          <Link to="/login" className="nav-item nav-link" href="#">ingresar</Link>
          <Link to="/register" className="nav-item nav-link" href="#">registro</Link>
        </div>
      </div>
      
    </nav>


        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/nuevoCurso" component={NuevoCurso} />
        </Switch>
      </div>
    );
  }
}

export default App;
