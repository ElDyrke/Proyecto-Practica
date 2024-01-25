import React from 'react'
import "./Registrarse.css"
import "../Iniciar_sesion/Iniciar_sesion.css"
import "../../App.css"
import landscape from '../../assets/img/landscape1.jpg'
import { Form_Registro, Navegacion } from '../../components'

const Registrarse = (props) => {
  return (
    <>
    <Navegacion/>
    <div className='Iniciar_sesion'>
      <div className="img-container row col-6-lg"><img src={landscape} alt="Paisaje de Turquia" /></div>
      <Form_Registro className="row col-6-lg"/>
    </div>
    </>
  )
}

export default Registrarse