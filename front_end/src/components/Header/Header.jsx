import React from 'react'
import "./Header.css"

const Header = (props) => {
  return (
      <div className="header" tabIndex={0}>
        <h4 className='titulo'>{props.subtitulo}</h4>
        <h3 className='titulo'>{props.texto}</h3>
        <p className='text-muted parrafo'>{props.foot}</p>
      </div>
  )
}

export default Header