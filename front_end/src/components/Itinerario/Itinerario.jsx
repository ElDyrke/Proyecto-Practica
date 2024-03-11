import React from 'react'
import "./Itinerario.css"
import { itinerario } from '../../api/apiAustral'
import { useQuery } from '@tanstack/react-query'
import Cargando from '../Cargando/Cargando'

const Itinerario = ({id}) => {
  const {isLoading, isError, error, data} = useQuery({
    queryKey: ['itinerario', id],
    queryFn: async () => {
      const {data} = await itinerario.get(`/${id}`)
      console.log(data)
      return data
    }
  })
  
  if (isLoading) {
    return <Cargando/>
  }

  if (isError) {
    return (<span>{error.message}</span>)
  }
  
  return (      
    <>
    {
    data.length > 0 ? 
    <div className='Itinerario'>
      <h3 className='titulo'>Itinerario</h3>  
      {data.map((v, i) => {
        return(
          <Item data={v}/>
        )
      })}
    </div>
    : null
    }
    </>
  )
}

const Item = ({data}) => {
  const handleClick = (e) => {
    const item = e.target
    item.classList.toggle("active");

    var panel = item.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  }

  return (
    <>
    <button className="accordion parrafo" onClick={handleClick}>Día {data.dia}</button>
    <div className="panel">
      <p className='parrafo'> {data.descripcion}</p>
    </div>
    </>
  )
}

export default Itinerario