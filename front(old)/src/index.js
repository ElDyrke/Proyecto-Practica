import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from './App.jsx'
import {Iniciar_sesion, Registrarse} from './web/index.js'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },{
    path: "/Iniciar-sesion",
    element: <Iniciar_sesion/>,
  },{
    path: "/Registrarse",
    element: <Registrarse/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
