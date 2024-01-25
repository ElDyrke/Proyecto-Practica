import React from 'react';
import "./Carrusel.css";
import {Carousel} from "react-bootstrap";

const Carrusel = (props) => {
    const images = props.import(require.context('../../assets/carrusel', false, /\.(png|jpe?g|svg)$/));


  return (
    <section className="carrusel">
        <Carousel interval={5000}>
            {images.map(([name, img], i) => (
                <Carousel.Item key={i}>
                    <img 
                        className='d-block w-100'
                        src={img}
                        alt={name}
                    />
                </Carousel.Item>
            ))}
            
        </Carousel>
        <div className="titulo-carrusel">
                <h1 className='display-2'>
                    Bienvenido a Austral Travelers
                </h1>
            </div>
            <div className="texto-carrusel">
                <p className='h2'>
                    Eco-turismo aventura al alcance de tu mano
                </p>
                <a href='#' className="btn btn-outline-light btn-lg">
                    Reserva Ya!
                </a>
        </div>
    </section>
  )
}

export default Carrusel