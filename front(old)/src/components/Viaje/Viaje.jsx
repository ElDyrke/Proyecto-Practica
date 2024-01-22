import React from 'react'
import { Card, Container } from 'react-bootstrap'
import "./Viaje.css";

const Viaje = (props) => {
  
  return (
    <>
    <Container className='col-auto col-md-6'>
      <Card>
        <Card.Img variant="top" src={props.img} />
        <Card.ImgOverlay>
        <Card.Title as={'h3'}>{props.titulo}</Card.Title>
        <div className='underline'></div>
        </Card.ImgOverlay>
        <Card.Body>
          <Card.Text>
            {props.descripcion}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
    
    </>
  )
}

export default Viaje