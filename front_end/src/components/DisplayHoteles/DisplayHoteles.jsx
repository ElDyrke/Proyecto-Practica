import React from 'react'
import { hotelesTour } from '../../api/apiAustral';
import { Viaje } from '../index'
import "./DisplayHoteles.css"
import ImagenOpcional from '../ImagenOpcional/ImagenOpcional';
import { useQuery } from '@tanstack/react-query';
import { Card, Container } from 'react-bootstrap';

const DisplayHoteles = ({id}) => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['hoteles'], 
    queryFn: async () => {
      const {data} = await hotelesTour.get(`/${id}`)
      console.log('hotel', data)
      return data
    }
  })

  if (isLoading) {
    return <span className='text-center'>Cargando...</span>
  }

  if (isError) {
    return <span className='text-center text-danger'>Error: {error.message}</span>
  }

  if (data.length > 0){

    return (
      <div className="hoteles">
        <h3 className='titulo text-center mb-3 mt-5'>Hoteles</h3>
        <div className="hoteles-wrap">
          {
            data.map((v, i) => (
            <Container className='col-auto col-md-6'>
              <Card>
                <ImagenOpcional imagen={v.imagen}/>
                <Card.ImgOverlay>
                  <Card.Title as={'h3'}>{v.nombre}</Card.Title>
                  <div className='underline'></div>
                </Card.ImgOverlay>
              </Card>
            </Container>
            ))
          }
        </div>
      </div>
    )
  }
  }

export default DisplayHoteles