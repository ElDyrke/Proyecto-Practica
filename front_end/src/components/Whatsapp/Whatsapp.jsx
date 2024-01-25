import React from 'react'
import "./Whatsapp.css"
import { Unstable_Popup as BasePopup } from '@mui/base/Unstable_Popup';


const Whatsapp = (props) => {
  var texto = "https://wa.me/56945649701/?text="
  if (props.text){
    texto += props.text
  }
  if (props.usuario){
    texto += " Datos de usuario: "
    for (const dato in props.usuario) {
      if (Object.hasOwnProperty.call(props.usuario, dato)) {
        const element = props.usuario[dato];
        texto += ` ${element}`
      }
    }
  }

  return (
    <div id="anchor" className='Whatsapp'>
      <a href={texto} target='blank'><i class="bi-whatsapp"></i></a>
    </div>
  )
}

export default Whatsapp