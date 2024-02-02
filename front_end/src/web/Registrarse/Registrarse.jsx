import React from 'react'
import "./Registrarse.css"
import "../../App.css"
import landscape from '../../assets/img/landscape1.jpg'
import { Form_Registro, Navegacion, Footer } from '../../components'

const Registrarse = (props) => {
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return Object.entries(images);
  }
  return (
    <>
    <Navegacion/>
    <div className='Iniciar_sesion'>
      <div className="img-container row col-6-lg"><img src={landscape} alt="Paisaje de Turquia" /></div>
      <Form_Registro className="row col-6-lg"/>
    </div>
    <Footer import={importAll}/>
    </>
  )
}

export default Registrarse