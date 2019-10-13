import React from 'react';
import { Link } from 'react-router-dom';
import './menu.css';

class Menu extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      
        <Link to="/" className="navbar-brand ">UncoEstudia</Link>
        <button className="navbar-toggler" type="button" id="navbarNavAltMarkup" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" ></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <Link to="/login" className="nav-item nav-link" >ingresar</Link>
            <Link to="/register" className="nav-item nav-link" >registro</Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Menu;
