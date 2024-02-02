import React from 'react'
import "./Footer.css"

const Footer = (props) => {
  const images = props.import(require.context(`../../assets/partners`, false, /.(png|jpe?g|svg)$/));
  return (
    <footer className='Footer'>
      <div className='docs'>
        <div><a href="/Terminos-y-Condiciones">Terminos y condiciones</a></div>
        <div><a href="">Politica de Privacidad</a></div>
      </div>
      
      <div className='partners'>        
        {
          images.map(([name, img], i) => (
           <img src={img} alt={name} key={i}/>
          ))
        }
      </div>
      <div className='sociales'>
        <a href="https://web.facebook.com/Australtravelers?locale=es_LA" target='blank'><i className='bi-facebook'></i></a>
        <a href="https://www.instagram.com/austral_travelers/" target='blank'><i className='bi-instagram'></i></a>
        <a href="https://wa.me/56945649701/" target='blank'><i className='bi-whatsapp'></i></a>
      </div>
      <div className='contacto'>
        <h4>Contactanos!</h4>
        <a href="mailto:reservas@australtravelers.com">reservas@australtravelers.com</a>
        <p>+56 9 4564 9701</p>
      </div>
    </footer>
  )
}

export default Footer