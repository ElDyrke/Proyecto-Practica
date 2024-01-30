import React, { useEffect, useState } from "react";
import {destinosApi} from './api/apiAustral.js'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {Iniciar_sesion, Registrarse, TerminosYcondiciones} from './web/index.js'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { Viaje } from "./components/index.js";

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
        element: <App/>,
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
  )
  console.log(router)


  return (
    <>
    <RouterProvider router={router} />
    <ReactQueryDevtools position="bottom-right" />
    </>
  );
}

export default App