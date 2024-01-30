import React from 'react'
import "./Footer.css"

const Footer = (props) => {
  return (
    <footer className='Footer'>
      <div className='docs'>
        <div><a href="/Terminos-y-Condiciones">Terminos y condiciones</a></div>
        <div><a href="">Politica de Privacidad</a></div>
      </div>
      <div className='partners'>
        
      </div>
      <div className='sociales'>
        <a href="https://web.facebook.com/Australtravelers?locale=es_LA"><i className='bi-facebook'></i></a>
        <a href="https://www.instagram.com/austral_travelers/" target='blank'><i className='bi-instagram'></i></a>
        <a href="https://wa.me/56945649701/" target='blank'><i className='bi-whatsapp'></i></a>
      </div>
    </footer>
  )
}

export default Footer