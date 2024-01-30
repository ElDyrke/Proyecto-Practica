import React from 'react'
import "../../App.css"
import { Footer, Navegacion } from '../../components'
import "./TerminosYcondiciones.css"

const TerminosYcondiciones = (props) => {
  return (
    <>
    <Navegacion/>
    <div className="container terms">
      <div className="row">
        <div className='col-12 col-md-6 col-lg-4'>
          <h1>Términos y Condiciones</h1>
          <ul>
            <li>
              <p>
              Todos los valores indicados son por persona, a menos que el programa lo detalle.
              </p>
            </li>
            <li>
              <p>
              Tipo de cambio considera pago al contado. Consulte condiciones por pago con
              tarjeta de crédito.
              </p>
            </li>
            <li>
              <p>
              No incluye gastos por documentación de pasajeros como visas o trámites aduaneros.
              </p>
            </li>
            <li>
              <p>
              Todos los traslados y servicios mencionados en losprogramas son en servicio regular, excepto aquellos que indiquen lo contrario.
              </p>
            </li>
            <li>
              <p>
              Los valores en pesos son referenciales con un tipo de cambio semanal que será actualizado al momento de la confirmación y pago de la reserva.
              </p>
            </li>
            <li>
              <p>
              Todas las tarifas deben ser reconfirmadas al momento de solicitar las reservas.
              </p>
            </li>
            <li>
              <p>
            Servicios no utilizados no son reembolsables.
              </p>
            </li>
            <li>
              <p>
            Precios no incluyen nada que no esté debidamente especificado.
              </p>
            </li>
            <li>
              <p>
              Todo tipo de alza de impuestos producidos en destino, deberán ser cancelados por cuenta del pasajero.
              </p>
            </li>
          </ul>
        </div>
        <div className='col-12 col-md-6 col-lg-8'>
          <div className="col">
            <h2>Limitacion de responsabilidad</h2>
            <ul>
              <li>
                <p>
                El Cliente comprende que, según la naturaleza de los servicios ofrecidos, él/ella puede exponerse a riesgos y elementos de posible peligro, y que la participación en excursiones de un día y otros programas turísticos ofrecidos por Austral Travelers implica riesgos de enfermedad, peligro para los bienes, lesiones personales y pérdida de vida.
                </p>
              </li>
              <li>
                <p>
                El Cliente acepta que ni él/ella ni ninguno de sus herederos, representativos personales o legales, o familiares presentarán demandas ni reclamarán por la enfermedad, lesión, pérdida o daños de bienes, o pérdida de vida que resulte de cualquier acción u omisión, inclusive cualquier negligencia por parte de Ecochile, sus empleados, directores, dueños, oficiales, agentes, contratistas u organizaciones afiliadas como consecuencia de su participación en los programas turísticos.
                </p>
              </li>
            </ul>
          </div>
          <div className="col">
            <h2>Seguro</h2>
            <ul>
              <li>
                <p>
                Austral Travelers asume que el Cliente es consciente de los riesgos y peligros de participar en los programa turísticos.
                </p>
              </li>
              <li>
                <p>
                Un certificado médico del estado de salud del Cliente (acreditando el que el Cliente es físicamente calificado para ser aceptado en el viaje) será requerido antes del inicio del tour. Si dicho certificado no es proporcionado por el Cliente, él/ella declara expresamente la exención de la responsabilidad de Austral Travelers ya que la compañía no se hará responsable de cualquier enfermedad médica derivada de condiciones médicas que no fueron declaradas por el Cliente.
                </p>
              </li>
              <li>
                <p>
                A fin de prevenir emergencias médicas no previstas (y caras), Austral Travelers recomienda fuertemente la contratación de un seguro de viaje apto para el programa turístico del Cliente. Dicho seguro deberá incluir por lo menos daños para accidentes personales y gastos médicos (idealmente, la provisión de una ambulancia aérea si fuese necesario) incurridos durante el programa.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default TerminosYcondiciones