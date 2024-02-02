import React from 'react'
import { useParams } from 'react-router-dom'
import "./Destino.css"
import { useQuery } from '@tanstack/react-query'
import { destinosApi } from '../../api/apiAustral'
import { Footer, Navegacion } from '../../components'

const Destino = (props) => {
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return Object.entries(images);
  }
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
    return(<div>Ha ocurrido un error</div>)
  }

  return (
    <>
    <header><Navegacion/></header>
    <main>
      <img src={data.imagen} style={{width: "100%"}} alt="" srcset="" />
      <div>
        <h2>{data.nombre}</h2>
        <p>{data.descripcion}</p>
      </div>
    </main>
    <footer>
      <Footer import={importAll}/>
    </footer>
    </>


  )
}

export default Destino