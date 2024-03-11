import React from 'react'
import "./Nosotros.css"
import logo from "../../assets/logos/logo austral verde.png"
import ImagenOpcional from '../ImagenOpcional/ImagenOpcional';

const Nosotros = (props) => {
    const images = props.import(require.context(`../../assets/nosotros`, false, /\.(png|jpe?g|svg)$/i));
    console.log(images[0][1])

  return (
    <section className="nosotros">
        <div className="img-wrap mb-4">
        </div>
        <div className='cuerpo' tabIndex={0}>
            <div className="titulo-nosotros ">
                <TituloNosotros lang={props.lang}/>
            </div>

            <div className="text-nosotros parrafo"> 
                <TextoNosotros lang={props.lang}/>
            </div>

            <div className="logo">
                <img src={logo} alt="" />
            </div>
        </div>
        <div className='imagenes mt-3'>
            <ImagenOpcional className="img-big" imagen={images[0][1]} baseUrl=''/>
            <ImagenOpcional className="img-smol" imagen={images[1][1]} baseUrl=''/>
            <ImagenOpcional className="img-smol"/>
        </div>
    </section>
  )
}

const TextoNosotros = (props) => {
    if (props.lang === 'en'){
        return (
            <div className="mt-2">
            <p className="mx-2">We are an ecotourism-oriented company, and as such, we have a strong focus on offering the experience of travel while also helping to preserve the flora, fauna and culture of the territories we explore.</p>
            <p className='"mx-2"'> We create environments based on collaboration and respect, thus minimizing the impact of tourism as a whole.</p>
        </div>
        )
    }
    if (props.lang === 'es'){
        return (
            <div className="mt-2">
            <p className="mx-2">Somos una empresa de ecoturismo, y como tal, nos enfocamos tanto en ofrecer la experiencia de viajar como en conservar la flora, fauna y cultura de los territorios explorados.</p>
            <p className="mx-2"> Generamos ambientes de colaboración y respeto, minimizando el impacto del turismo en todos sus aspectos.</p>
            </div>
        )
    }
    return (
        <div className="mt-2">
        <p className="mx-2">Somos una empresa de ecoturismo, y como tal, nos enfocamos tanto en ofrecer la experiencia de viajar como en conservar la flora, fauna y cultura de los territorios explorados.</p>
        <p className='mx-2'> Generamos ambientes de colaboración y respeto, minimizando el impacto del turismo en todos sus aspectos.</p>
        </div>
    )
}

const TituloNosotros = (props) => {
    if (props.lang === 'es'){
        return (
            <h2 className='titulo'>¿Quienes sómos?</h2>
        )
    }
    if (props.lang === 'en'){
        return (
            <h2 className='titulo'>Who are we?</h2>
        )
    }
    return (
        <h2 className='titulo'>¿Quienes sómos?</h2>
    )
}

export default Nosotros