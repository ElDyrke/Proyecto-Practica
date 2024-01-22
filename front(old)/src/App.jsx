import {Navegacion, Carrusel, Banner, Nosotros, Viaje, Whatsapp} from "./components/index";
import logo from "./assets/carrusel/IMG_2868.jpg"


function App() {
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
    <div id="Viajes" className="row" style={{width: "100%", overflow: "hidden"}}>
      <Viaje img={logo} titulo="Destino" descripcion="Lorem Ipsum Dolor Sus jdashdjabh"/>
      <Viaje img={logo} titulo="Destino" descripcion="Lorem Ipsum Dolor Sus jdashdjabh"/>
      <Viaje img={logo} titulo="Destino" descripcion="Lorem Ipsum Dolor Sus jdashdjabh"/>
    </div>
      <Whatsapp text="Hola, tengo una consulta." usuario={datos_usuario}/>
    </>
  );
}

export default App;
