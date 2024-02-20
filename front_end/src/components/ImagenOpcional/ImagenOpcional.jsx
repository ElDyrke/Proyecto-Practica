import React from 'react'
import "./ImagenOpcional.css"

const ImagenOpcional = ({imagen, className, alt}) => {
  if (imagen){
    return(
    <img className={className} src={imagen} alt={alt} />
    )
  } else {
    return(
      <img className={className} src="https://placehold.co/600x400/png" alt="placeholder" />
    )
  }
}

export default ImagenOpcional