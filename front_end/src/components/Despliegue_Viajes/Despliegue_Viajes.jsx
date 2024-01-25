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
    <div className="Despliegue_Viajes row" style={{width: "100%", overflow: "hidden"}}>
      <div className="header">
        <h3>All-Inclusive</h3>
        <p className='text-muted'>Reserva aquí nuestros planes todo incluido y cruza el oceano en busca de nuevas experiencias</p>
      </div>
      {
        data.map((d, i) => {
          if (!(d.etiquetas.includes(1))){
            return (<Viaje img={d.imagen} titulo={d.nombre} descripcion={d.descripcion} />)
          }
        })
      }
      <div className='header'>
        <h3>Patagonia</h3>
        <p className='text-muted'>Explora con nosotros los paisajes del fin del mundo</p>
      </div>
      {
        data.map((d, i) => {
          if ((d.etiquetas.includes(1))){
            return (<Viaje img={d.imagen} titulo={d.nombre} descripcion={d.descripcion} />)
          }
        })
      }
      
    </div>
  )
}

export default Despliegue_Viajes