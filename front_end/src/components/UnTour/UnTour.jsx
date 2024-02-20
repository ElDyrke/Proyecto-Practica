import React from 'react'
import "./UnTour.css"
import ImagenOpcional from '../ImagenOpcional/ImagenOpcional';
import DisplayHoteles from '../DisplayHoteles/DisplayHoteles';

const UnTour = (props) => {
  const data = props.tour
  const descripcion = data.descripcion.split('\n')
  console.log(descripcion)
  const incluido = data.incluye.trim().split(';')

  return (
    <>
    <div className="container tour">
      <div style={{"width":"100%"}}>
        <ImagenOpcional imagen={data.imagen} alt={data.nombre}/>
        <ul className="info parrafo">
          <Info data={data}/>
        </ul>
      </div>
      <div className="descripcion-tour">
        {descripcion.map((text, i) => (<p className='parrafo'>{text}</p>))}
      </div>
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
      <DisplayHoteles id={data.id}/>
    </div>
    </>
  )
}

const Info = ({data}) => {
  let dinero = new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'CLP',
  });
  return (
    <>
    {data.precio ?
      <li>
      <i className='bi bi-cash'></i>
      <div>{ dinero.format(data.precio)}</div> 
      </li>
      
     : ""}
    {data.fecha_inicio ?
    <li>
      <i className='bi bi-calendar'></i>
      <div>{data.fecha_inicio}</div> 
    </li>
     : "" }
    {data.cupos ?
     <li>
      <i className='bi bi-person'></i>
      <div>{data.cupos}</div>
      </li> 
     : ""}
    </>
  )
}

export default UnTour