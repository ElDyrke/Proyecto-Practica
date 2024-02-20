import React from 'react'
import "./Destino_presentacion.css"
import {AcordeonTours, Header, ImagenOpcional, Slider_Tours, UnTour} from "../index"
import { destinosApi } from '../../api/apiAustral'
import { useQuery } from '@tanstack/react-query'

const Destino_presentacion = (props) => {
  const {isLoading, isError, data} = useQuery({
    queryKey: ['destino', props.id],
    queryFn: async () => {
      const {data} = await destinosApi.get(`/${props.id}/`)
      return data
    }} )
  if (isLoading){
    return (<div>Cargando</div>)
  }

  if (isError){
    return(<div>Ha ocurrido un error</div>)
  }
  return (
    <>
      <Header texto={data.nombre}/>
    <section className="destino-presentacion">
      <div className='img-wrap'>
        <ImagenOpcional imagen={data.imagen} alt={data.nombre} className="destino-imagen overflow-hidden" />
      </div>
      <div className='destino-descripcion parrafo'>
        <p>{data.descripcion}</p>
      </div>
    </section>
    <section className='Viajes'>
        <Header texto={"Tours Disponibles"}/>
        <AcordeonTours 
          destinoId={data.id}
          getHeader={
            viaje => (
              <h2 className='titulo' style={{"color": "var(--verde-principal", "font-weight": "500", "font-size":"clamp(20px, 3vw, 35px)"}}>{viaje.nombre}</h2>
            )
          }
          renderContent={viaje => (
            <UnTour tour={viaje}/>
          )}
        />
    </section>
    </>
  )
}

const MostrarTours = (props) => {
  const tours = props.data
  if (tours.length == 0){
    return (<span className='text-muted'>No hay viajes disponibles para este destino</span>)
  } 
  else if (tours.length == 1){
    return (
      <UnTour tour={tours[0]}/>
    )
  } else {return (<Slider_Tours data={tours}/>)}
}

export default Destino_presentacion