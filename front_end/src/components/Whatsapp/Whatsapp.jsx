import React, { useEffect, useState } from 'react'
import "./Whatsapp.css"


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
  
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let timeout;

    const handleScroll = () => {
      clearTimeout(timeout);
      setIsScrolling(true);

      timeout = setTimeout(() => {
        setIsScrolling(false);
      }, 500); // Adjust the delay (in milliseconds) to your preference
    };
    
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="anchor" className={`Whatsapp ${isScrolling? '' : 'fade-out'}`}>
      <a href={texto} target='blank'><i class="bi-whatsapp"></i></a>
    </div>
  )
}

export default Whatsapp