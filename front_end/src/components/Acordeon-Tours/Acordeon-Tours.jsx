import React from 'react'
import "./Acordeon-Tours.css"
import Accordion from 'react-bootstrap/Accordion';
import { viajesApi } from '../../api/apiAustral'
import { useQuery } from '@tanstack/react-query'


const AcordeonTours = ({destinoId, renderContent, getHeader}) => {
  const {isLoading, isError, data} = useQuery({
    queryKey: ['viajes', destinoId],
    queryFn: async () => {
      const {data} = await viajesApi.get(`/${destinoId}`)
      return data
    }} )

  if (isLoading){
    return (<div>Cargando</div>)
  }

  if (isError){
    return(<div>Ha ocurrido un error</div>)
  }
  
  console.log(data)
  return (
    <Accordion defaultActiveKey={0}>
      { 
        data.map( (v,i) =>
          (
          <Accordion.Item eventKey={i}>
            <Accordion.Header>
              {getHeader(v)}
            </Accordion.Header>
            <Accordion.Body>
              {renderContent(v)}
            </Accordion.Body>
          </Accordion.Item>
          ))
      }
    </Accordion>
  );
}

export default AcordeonTours;