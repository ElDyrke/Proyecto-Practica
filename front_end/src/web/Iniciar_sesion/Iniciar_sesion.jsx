import React from 'react'
import "./Iniciar_sesion.css"
import "../../App.css"
import landscape from '../../assets/img/landscape1.jpg'
import { Form_usuario, Navegacion, Footer } from '../../components'

const Iniciar_sesion = (props) => {

  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return Object.entries(images);
  }
  return (
    <>
    <Navegacion/>
    <div className='Iniciar_sesion'>
      <div className="img-container row col-2-lg"><img src={landscape} alt="Paisaje de Turquia" /></div>
      <Form_usuario className="row col-6-lg"/>
    </div>
    <Footer import={importAll}/>
    </>
  )
}

export default Iniciar_sesion