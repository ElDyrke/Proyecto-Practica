import React from 'react'
import './Cargando.css'
import earth from '../../assets/earth.svg'
import plane from '../../assets/plane.svg'

const Cargando = () => {
  return (
    <>
    <div class="cargando">
        <div class="animation-wrap">
            <img src={earth} id="tierra" alt="" srcset=""/>
            <img src={plane} id="avioncito" alt=""/>
        </div>
        <span>Cargando...</span>
    </div>
    </>
  )
}

export default Cargando