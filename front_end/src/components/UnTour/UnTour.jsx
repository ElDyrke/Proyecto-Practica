import React from 'react'
import "./UnTour.css"
import ImagenOpcional from '../ImagenOpcional/ImagenOpcional';
import DisplayHoteles from '../DisplayHoteles/DisplayHoteles';
import Itinerario from '../Itinerario/Itinerario';
import web_pago from '../../assets/btn-flow-negro.png'

const UnTour = ({tour}) => {
  const descripcion = tour.descripcion.split('\n')
  console.log(tour.imagen)
  const incluido = tour.incluye === "" ? [] : tour.incluye.trim().split(';')
  const no_incluido = tour.no_incluye === "" ? [] : tour.no_incluye.trim().split(';')

  // if (tour.fecha_inicio){
  //   let fecha = new Date(tour.fecha_inicio)
  //   let diferenciaMs = fecha.getTime() - Date.now().getTime()

  //   const diferenciaDias = Math.round(diferenciaMs / (1000 * 3600 * 24));
  // }
  
  // TODO: Ver el tema de las reservas
  return (
    <>
    <div className="container tour">
      <div>
        <ImagenOpcional imagen={tour.imagen} alt={tour.nombre} className={'imagen-tour'}/>
        <ul className="info parrafo">
          <Info tour={tour}/>
        </ul>
      </div>

      <div className="descripcion-tour">
        {
          tour.link_pago ?
          <>
            <a href={tour.link_pago} target="_blank" className='boton-pago' rel="noopener noreferrer">
            <img src={web_pago} alt="Botón pago flow" />
            </a>
          </>
          : null
        }
        {descripcion.map((text, i) => (<p className='parrafo'>{text}</p>))}
      </div>

        
        {incluido.length > 0 ?
          <div>
            <h3 className='titulo text-center mb-3 mt-5'>Incluye</h3>
            <ul className='incluye'>
              {incluido.map((e, i) => (
                <li>
                <i className='bi bi-check-lg'></i>
                <p className='parrafo'>{e.trim()}</p>
                </li>
              ))}
            </ul>
          </div>
        : null}
        
        {no_incluido.length > 0 ?
          <div>
            <h3 className='titulo text-center mb-3 mt-5'>No Incluye</h3>
            <ul className='incluye'>
              {no_incluido.map((e, i) => (
                <li>
                <i className='bi bi-x-lg'></i>
                <p className='parrafo'>{e.trim()}</p>
                </li>
              ))}
            </ul>
          </div>
        : null}


      <DisplayHoteles id={tour.id}/>
      <Itinerario id={tour.id}/>

    </div>
    </>
  )
}

const Info = ({tour}) => {
  let dinero = new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'CLP',
  });

  if (tour.precio && tour.fecha_inicio && tour.cupos){

    return (
      <>
      <li>
      <i className='bi bi-cash'></i>
      <div className='parrafo'>{ dinero.format(tour.precio)}</div> 
      </li>

      <li>
        <i className='bi bi-calendar'></i>
        <div className='parrafo'>{tour.fecha_inicio}</div> 
      </li>

      <li>
      <i className='bi bi-person'></i>
      <div className='parrafo'>{tour.cupos}</div>
      </li> 

      </>
    )
  } else {
    return (
      <li style={{"gridColumn": "2 / 3"}}>
        <i className='bi bi-whatsapp'></i>
        <div><a className='text-light parrafo' style={{"textDecoration": "none"}} href="https://wa.me/56945649701/">Contacta con nosotros!</a></div>
      </li>
    )
  }

}

export default UnTour