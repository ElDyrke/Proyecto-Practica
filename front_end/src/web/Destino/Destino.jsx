import React from 'react'
import { useParams } from 'react-router-dom'
import "./Destino.css"
import { useQuery } from '@tanstack/react-query'
import { DestinoPresentacion, Footer, Navegacion, Whatsapp } from '../../components'

const Destino = (props) => {
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => (images[item.replace('./', '')] = r(item)));
    return Object.entries(images);
  }
  const params = useParams()
  return (
    <>
    <header><Navegacion/></header>
    <main>
      <div>
        
        <DestinoPresentacion id={params.id}/>
      </div>
      <div>
        
      </div>
    </main>
    <Whatsapp/>
    <footer>
      <Footer import={importAll}/>
    </footer>
    </>


  )
}

export default Destino