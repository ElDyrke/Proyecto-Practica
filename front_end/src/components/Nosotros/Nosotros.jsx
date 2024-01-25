import React from 'react'
import "./Nosotros.css"

const Nosotros = (props) => {
    const images = props.import(require.context(`../../assets/logos`, false, /\Verde.(png|jpe?g|svg)$/));

  return (
    <section className="cuerpo">
        <div className="img-wrap mb-4">
            <div className="imagenes">
                {
                images.map(([name, img], i) => (
                    <img src={img} alt={name} key={i}/>
                ))
            }
            </div>
        </div>


        <div className="mt-5">
            <p className="h4 text-center m-auto">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, laborum distinctio eligendi placeat, quia repellat provident, doloribus et iste illum optio. Iste voluptatibus voluptatem nesciunt, debitis facere eos eum illo!</p>
        </div>
    </section>
  )
}

export default Nosotros