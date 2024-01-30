import * as React from "react";
import * as ReactDOM from "react-dom/client";
import reportWebVitals from './reportWebVitals.js'
import App from './App.jsx'
import {destinosApi} from './api/apiAustral.js'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {Iniciar_sesion, Registrarse, TerminosYcondiciones} from './web/index.js'
import {Viaje} from './components/index.js'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 10,
    },
  },
})

const data = async () => {
  let coso = destinosApi.get("/").then(response => response.data)
  return coso
}
const paths = [{
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
  },
]

const routes =
  data.map((item) => ({
    path: `/items/${item.id}`,
    element: <ItemComponent item={item} />,
  }));



console.log(paths.push(routes))
const router = createBrowserRouter(paths);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools position="bottom-right" />
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
