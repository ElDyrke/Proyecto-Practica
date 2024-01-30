import {Navegacion, Carrusel, Banner, Nosotros, Despliegue_Viajes, Whatsapp, Footer} from "../../components";
import { useEffect, useState } from "react";


function Inicio() {
  var [destinos, setDestinos] = useState([])

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
      <Banner import={importAll}/>
    <div id="Nosotros">
      <Nosotros import={importAll}/>
    </div>
    <div id="Viajes">
      <Despliegue_Viajes destinos={destinos}/>
    </div>
      <Whatsapp text="Hola, tengo una consulta." usuario={datos_usuario}/>
      <Footer/>
    </>
  );
}

export default Inicio;
