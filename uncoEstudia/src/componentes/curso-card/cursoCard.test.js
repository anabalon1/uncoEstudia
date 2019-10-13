import React from 'react';
import ReactDOM from 'react-dom';
import CursoCard from './cursoCard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CursoCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});
