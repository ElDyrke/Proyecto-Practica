import * as React from "react";
import * as ReactDOM from "react-dom/client";
import reportWebVitals from './reportWebVitals.js'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {Contacto, ErrorPage, Iniciar_sesion, Registrarse, TerminosYcondiciones} from './web/index.js'
import hiker from "./assets/hiker.svg"
import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import "./index.css";
import Inicio from "./web/Inicio/Inicio.jsx";
import Destino from "./web/Destino/Destino.jsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 10,
    },
  },
})


// const paths = [{
//     path: "/",
//     element: <Inicio/>,
//   },{
//     path: "/Iniciar-sesion",
//     element: <Iniciar_sesion/>,
//   },{
//     path: "/Registrarse",
//     element: <Registrarse/>
//   },{
//     path: "/Terminos-y-Condiciones",
//     element: <TerminosYcondiciones/>
//   },{
//     path: "/Destino/:id",
//     element: <Destino />
//   }
// ]

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/Iniciar-sesion" element={<Iniciar_sesion/>}/>
          <Route path="/Registrarse" element={<Registrarse/>}/>
          <Route path="/Terminos-y-Condiciones" element={<TerminosYcondiciones/>}/>
          <Route path="/Destino/:id" element={<Destino />}/>
          <Route path="*" element={<ErrorPage/>}/>
          <Route path="/Contacto" element={<Contacto/>} 
          action={async ({ params, request }) => {
          let formData = await request.formData();
          console.log(formData);
          }}
        />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);

function ItemComponent({ item }) {
  // Render the component for each item
  return <div>{item.nombre}</div>;
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
