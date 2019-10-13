import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './cursoCard.css';

class CursoCard extends React.Component {
  render() {
    console.log(this.props)
    const titulo = this.props.children[0]
    const descripcion = this.props.children[1]
    const valor = this.props.children[2]
    return (
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>{titulo}</Card.Title>
    <Card.Text>{descripcion}</Card.Text>
    <Button variant="primary">${valor}</Button>
  </Card.Body>
</Card>
    );
  }
}

export default CursoCard;
