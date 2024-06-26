import React from 'react'
import "./Despliegue_Viajes.css"
import { useQuery } from '@tanstack/react-query'
import { destinosApi } from '../../api/apiAustral';
import {Cargando, Header, Viaje} from '../index'
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
    return <Cargando/>
  }

  if (isError) {
    return <span className='text-center text-danger'>Error: {error.message}</span>
  }


  return (
    <div className="Despliegue_Viajes" style={{width: "100%", overflow: "hidden"}}>
      <Header texto={"Viaja fuera de Chile"} foot={"Cruza el oceano en busca de nuevas experiencias"}/>
      <div className='extranjero'>
        <div>
          <Header subtitulo={'All-Inclusive'} foot={'Opciones todo incluido'}/>
            <div className="destinos">
              {
                data.map((d, i) => {
                  if (d.etiquetas.includes(1)){
                    return (<Viaje href={`/Destino/${d.id}`} img={d.imagen} titulo={d.nombre} descripcion={d.descripcion} />)
                  }
                })
              }
          </div>
        </div>



        <div>
          <Header subtitulo="Otros Destinos" foot={'Aún más que explorar con nosotros'}/>
          <div className="destinos mb-5">
            {
              data.map((d, i) => {
                if (d.etiquetas.includes(2)){
                  return (<Viaje href={`/Destino/${d.id}`} img={d.imagen} titulo={d.nombre} descripcion={d.descripcion} />)
                }
              })
            }
          </div>
        </div>
      </div>

      <Header subtitulo="Torres del Paine" texto="Patagonia Chilena" foot="Explora con nosotros los paisajes del fin del mundo, saliendo desde:"/>
      <div className="destinos mb-4">
        {
          data.map((d, i) => {
            if ((d.etiquetas.includes(3))){
              return (<Viaje href={`/Destino/${d.id}`} img={d.imagen} titulo={d.nombre} descripcion={d.descripcion} />)
            }
          })
        }
      </div>
    </div>
  )
}

export default Despliegue_Viajes