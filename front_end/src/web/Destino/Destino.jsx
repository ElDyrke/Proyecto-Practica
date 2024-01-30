import React from 'react'
import { useParams } from 'react-router-dom'
import "./Destino.css"
import { useQuery } from '@tanstack/react-query'
import { destinosApi } from '../../api/apiAustral'

const Destino = (props) => {
  const params = useParams()
  const {isLoading, isError, data} = useQuery({
    queryKey: ['destino', params.id],
    queryFn: async () => {
      const {data} = await destinosApi.get(`/${params.id}/`)
      return data
    }} )
  if (isLoading){
    return (<div>Cargando</div>)
  }

  if (isError){
    return(<div>Ohh no</div>)
  }

  return (
    <div>{data.nombre}</div>
  )
}

export default Destino