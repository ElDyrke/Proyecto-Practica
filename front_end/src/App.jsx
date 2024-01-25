import {Navegacion, Carrusel, Banner, Nosotros, Despliegue_Viajes, Whatsapp} from "./components/index";
// import { DestinosGeneral } from './api/apiAustral';
import { signal } from '@preact/signals-react';
import { useEffect, useState } from "react";


function App() {
  var [destinos, setDestinos] = useState([])

  // useEffect(() => {
  //   DestinosGeneral().then((response) => {
  //   setDestinos(response.data)})
  // }, [])
  
  // Para Debug
  // useEffect(() => {
  //   console.log(destinos)
  // }, [destinos])

  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return Object.entries(images);
  }

  const datos_usuario = {"first_name": 'Nombre', "last_name": 'Apellido', "email": "email@coso.cl"}
  return (
    <>
    <Navegacion/>
    <div id="Inicio">
      <Carrusel import={importAll}/>
    </div>
    <div id="Nosotros">
      <Banner import={importAll}/>
      <Nosotros import={importAll}/>
    </div>
      <Despliegue_Viajes destinos={destinos}/>
      <Whatsapp text="Hola, tengo una consulta." usuario={datos_usuario}/>
    </>
  );
}

export default App;
