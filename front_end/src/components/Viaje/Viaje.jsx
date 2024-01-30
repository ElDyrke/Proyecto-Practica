import React from 'react'
import { Card, Container } from 'react-bootstrap'
import "./Viaje.css";
import logo from "../../assets/carrusel/IMG_2868.jpg";

const Viaje = (props) => {
  const imagen = props.img ? props.img : logo 

  return (
    <>
    <Container className='col-auto col-md-6'>
      <Card>
        <a href={props.href}>
          <Card.Img variant="top" src={imagen} />
        <Card.ImgOverlay>
        <Card.Title as={'h3'}>{props.titulo}</Card.Title>
        <div className='underline'></div>
        </Card.ImgOverlay>
      </a>
        <Card.Body>
          <Card.Text className='parrafo'>
            {props.descripcion}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
    
    </>
  )
}

export default Viaje