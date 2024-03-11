import React from 'react'
import './ErrorPage.css'
import hiker from "../../assets/hiker.svg"
import logo from "../../assets/logos/logo austral verde.png"

const ErrorPage = () => {
  return (
    <div className='error-wrap my-5'>
    <div className="hiker-wrap">
      <img id='hiker' src={hiker} alt="Icono Excursionista" srcset="" />
      <i className='bi bi-question'></i>
    </div>
    <div className='texto-error'>
      <h1 className='titulo'>Error 404</h1>
      <p className='parrafo text-muted text-center'>Parece que te has perdido, no se ha encontrado una página en esta ruta.</p>
    </div>
    <div id='logo-austral'>
      <img src={logo} alt="Logo Austral Travelers" srcset="" />
    </div>
    </div>
  )
}

export default ErrorPage