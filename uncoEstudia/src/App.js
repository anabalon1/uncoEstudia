import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import withAuth from './withAuth';
import Home from './Home';
import Login from './Login';
import NuevoCurso from './nuevoCurso'
import 'bootstrap/dist/css/bootstrap.css';
import Register from './Register';
import Menu from './componentes/menu/menu';
import Footer from './componentes/footer/footer';

class App extends Component {
  render() {
    return (
   
      <div>
        <Menu></Menu>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/register" component={withAuth(Register)} />
          <Route path="/login" component={Login} />
          <Route path="/nuevoCurso" component={NuevoCurso} />
        </Switch>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
