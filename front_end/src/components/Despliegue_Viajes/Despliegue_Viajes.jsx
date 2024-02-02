import React from 'react'
import "./Despliegue_Viajes.css"
import { useQuery } from '@tanstack/react-query'
import { destinosApi } from '../../api/apiAustral';
import {Viaje} from '../index'
import axios from 'axios';

const Despliegue_Viajes = (props) => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['destinos'], 
    queryFn: async () => {
      const {data} = await destinosApi.get('/')
      return data
    }
  })
          
  if (isLoading) {
    return <span className='text-center'>Cargando...</span>
  }

  if (isError) {
    return <span className='text-center text-danger'>Error: {error.message}</span>
  }


  return (
    <div className="Despliegue_Viajes" style={{width: "100%", overflow: "hidden"}}>
      <div className="header" tabIndex={0}>
        <h3>All-Inclusive</h3>
        <p className='text-muted parrafo'>Cruza el oceano en busca de nuevas experiencias</p>
      </div>
      <div className="destinos">
        {
          data.map((d, i) => {
            if ((d.etiquetas.includes(2))){
              return (<Viaje href={`/Destino/${d.id}`} img={d.imagen} titulo={d.nombre} descripcion={d.descripcion} />)
            }
          })
        }
      </div>
      <div className='header' tabIndex={0}>
        <h4>Torres del Paine</h4>
        <h3>Patagonia Chilena</h3>
        <p className='text-muted parrafo'>Explora con nosotros los paisajes del fin del mundo, saliendo desde:</p>
      </div>
      <div className="destinos">
        {
          data.map((d, i) => {
            if ((d.etiquetas.includes(1))){
              return (<Viaje href={`/Destino/${d.id}`} img={d.imagen} titulo={d.nombre} descripcion={d.descripcion} />)
            }
          })
        }
      </div>
      <div className="header" tabIndex={0}>
        <h3>Tours al Extranjero</h3>
        <p className='text-muted parrafo'>No te pierdas estas oportunidades especiales</p>
      </div>
      <div className="destinos">
        {
          data.map((d, i) => {
            if (!(d.etiquetas.includes(1)) && !d.etiquetas.includes(2)){
              return (<Viaje href={`/Destino/${d.id}`} img={d.imagen} titulo={d.nombre} descripcion={d.descripcion} />)
            }
          })
        }
      </div>
      
    </div>
  )
}

export default Despliegue_Viajes