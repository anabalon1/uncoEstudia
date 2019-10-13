import React from 'react';
import Inicio from '../componentes/inicio/inicio';
import CursoCard from '../componentes/curso-card/cursoCard';
// import logo from './logo.svg'; 

class Inicio extends React.Component {
  render() {
    return (
      <div>
        <Inicio></Inicio>
        <div className="container mt-3">
          <h5 class="font-weight-600 alt-font text-extra-dark-gray"></h5>
          <CursoCard></CursoCard>
        </div>
      </div>
        
    );
  }
}

export default Inicio;