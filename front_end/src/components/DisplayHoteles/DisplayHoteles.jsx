import React from 'react'
import { hotelesTour } from '../../api/apiAustral';
import "./DisplayHoteles.css"
import ImagenOpcional from '../ImagenOpcional/ImagenOpcional';
import { useQuery } from '@tanstack/react-query';
import { Navigation, Pagination } from 'swiper/modules';
// Direct React component imports
import { Swiper, SwiperSlide } from 'swiper/react';

// Styles must use direct files imports
import 'swiper/css'; // core Swiper
import Cargando from '../Cargando/Cargando';

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
    return <Cargando/>
  }

  if (isError) {
    return <span className='text-center text-danger'>Error: {error.message}</span>
  }

  if (Array.isArray(data)){
    // TODO: carrusel con imagenes del hotel y las habitaciones.
    return (
      <div className="hoteles">
        <h3 className='titulo text-center mb-3 mt-5'>Nuestros Hoteles</h3>
          <Swiper spaceBetween={0} slidesPerView={1}>
          {
              data.map((v, i) => {
                console.log('v',v)
                return (
                <>
                <SwiperSlide>
                  <ImagenOpcional imagen={v.imagen}/>
                </SwiperSlide>
                <SwiperSlide>
                  <ImagenOpcional imagen={v.imagen_habitacion}/>
                </SwiperSlide>
                </>
              )}
            )}
          </Swiper>
      </div>
    )
  }else{
    console.log('else', data)
    // TODO: carrusel con imagenes del hotel y las habitaciones.
    return (
      <div className="hoteles">
        <h3 className='titulo text-center mb-3 mt-5'>Nuestros Hoteles</h3>
          <Swiper spaceBetween={0} slidesPerView={1}>

                <SwiperSlide>
                  <ImagenOpcional  src={data.imagen}/>
                </SwiperSlide>
                <SwiperSlide>
                  <ImagenOpcional src={data.imagen_habitacion}/>
                </SwiperSlide>

          </Swiper>
      </div>
    )
  }
  }

export default DisplayHoteles