import React, { useEffect, useState } from "react";
import {destinosApi} from './api/apiAustral.js'
import { Inicio, Iniciar_sesion, Registrarse, TerminosYcondiciones} from './web/index.js'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { Viaje } from "./components/index.js";
import hiker from "./assets/hiker.svg"

function App() {

  // const [paths, setPaths] = useState(
  //   [
  //     {
  //       path: "/",
  //       element: <App/>,
  //     },{
  //       path: "/Iniciar-sesion",
  //       element: <Iniciar_sesion/>,
  //     },{
  //       path: "/Registrarse",
  //       element: <Registrarse/>
  //   },{
  //     path: "/Terminos-y-Condiciones",
  //     element: <TerminosYcondiciones/>
  //   },
  // ]
  // )
  // const [router, setRouter] = useState(createBrowserRouter(paths))

  // useEffect(async () => {
  //   const data = await destinosApi.get("/").then(response => response.data)
  //   data.map((item) => {
  //     setPaths((old) => [...old , {
  //       path: `/items/${item.id}`,
  //       element: <ItemComponent item={item} />,
  //     }])
  //   }
  //   );
  // })



  // const routes =
  //   data.map((item) => ({
  //     path: `/items/${item.id}`,
  //     element: <ItemComponent item={item} />,
  //   }));


  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Inicio/>,
        errorElement: <ErrorPage />
      },{
        path: "/Iniciar-sesion",
        element: <Iniciar_sesion/>,
      },{
        path: "/Registrarse",
        element: <Registrarse/>
      },{
        path: "/Terminos-y-Condiciones",
        element: <TerminosYcondiciones/>
      },{
        path: "/Destino/:id",
        element: <Viaje/>
      }
    ]
  );

  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

const ErrorPage = (props) => {
  return (
    <>
    <img src={hiker} alt="" srcset="" />
    <div><p>error</p>
    </div>
    </>
    
  )
}

export default App