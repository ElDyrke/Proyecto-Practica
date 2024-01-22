import React from 'react';
import "./Banner.css";
import {Carousel} from "react-bootstrap";

const Banner = (props) => {
    const images = props.import(require.context(`../../assets/carrusel`, false, /\.(png|jpe?g|svg)$/));
      
  return (
    <section className="banner">
        <Carousel interval={3000} controls={false}>
            {images.map(([name, img], i) => (
                <Carousel.Item>
                    <img 
                        className='d-block w-100'
                        src={img}
                        alt={name}
                    />
                </Carousel.Item>
            ))}
        </Carousel>
    </section>
  )
}

export default Banner