import React from 'react'
import "./Nosotros.css"
import logo from "../../assets/logos/logo austral verde.png"

const Nosotros = (props) => {
    const images = props.import(require.context(`../../assets/logos`, false, /\Verde.(png|jpe?g|svg)$/));

  return (
    <section className="nosotros">
        <div className="img-wrap mb-4">
            {/* <div className="imagenes">
                {
                images.map(([name, img], i) => (
                    <img src={img} alt={name} key={i}/>
                ))
            }
            </div> */}
        </div>
        <div className='cuerpo'>
            <div className="titulo-nosotros ">
                <h2 className='titulo'>¿Quienes sómos?</h2>
            </div>

            <div className="text-nosotros parrafo"> 
                <TextoNosotros lang={props.lang}/>
            </div>

            <div className="logo">
                <img src={logo} alt="" />
            </div>
        </div>
    </section>
  )
}

const TextoNosotros = (props) => {
    if (props.lang == 'en'){
        return (
            <div className="mt-5">
            <p className="m-auto">We are an ecotourism-oriented company, and as such, we have a strong focus on offering the experience of travel while also helping to preserve the flora, fauna and culture of the territories we explore.</p><p> We create environments based on collaboration and respect, thus minimizing the impact of tourism as a whole.</p>
        </div>
        )
    }
    if (props.lang == 'es'){
        return (
            <div className="mt-5">
            <p className="m-auto">Somos una empresa de ecoturismo, y como tal, nos enfocamos tanto en ofrecer la experiencia de viajar como en conservar la flora, fauna y cultura de los territorios explorados.</p><p> Generamos ambientes de colaboración y respeto, minimizando el impacto del turismo en todos sus aspectos.</p>
            </div>
        )
    }
    return (
        <div className="mt-5">
        <p className="m-auto">Somos una empresa de ecoturismo, y como tal, nos enfocamos tanto en ofrecer la experiencia de viajar como en conservar la flora, fauna y cultura de los territorios explorados.</p><p className='m-auto'> Generamos ambientes de colaboración y respeto, minimizando el impacto del turismo en todos sus aspectos.</p>
        </div>
    )
}

export default Nosotros