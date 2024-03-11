import React, { useState } from 'react'
import "./Contacto.css"
import { Footer, Header, Navegacion } from '../../components'
import { Container, Form} from 'react-bootstrap';
import Input from '../../components/Input/Input';
import { useNavigate } from 'react-router-dom';

const Contacto = (props) => {
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return Object.entries(images);
  }

  const navigate = useNavigate()

  const [usuario, setUsuario] = useState({
    username: '',
    nombre: '',
    apellido: '',
    mensaje: ''
  })

  const handler = (e) => {
    e.preventDefault()
    const {name, value} = e.target
    setUsuario({...usuario, [name]: value})
  }

  // Para que esto funcione tienen que enviar un correo de prueba y 
  // activarlo desde el link que se entrega

  return (
    <>
    <header><Navegacion/></header>
    
    <main>
      <div style={{'margin-top': '5rem'}}>
      <Header texto="Contactanos!"/>
      <Container>
        <Form className='form-contacto' method='POST' action='https://formsubmit.co/reservas@australtravelers.com'>
          <div className='nombre'>
            <Input type="text" placeholder="Nombre" controlId="formNombre" name={'nombre'} value={usuario.nombre} handler={handler}/>
            <Input type="text" placeholder="Apellido" controlId="formApellido" name={'apellido'} value={usuario.apellido} handler={handler}/>
          </div>
          <Input type="email" placeholder="Email@example.cl" controlId="formEmail" name={'email'} value={usuario.username} handler={handler}/>
          <Form.Group controlId='formMensaje'>
            <Form.Control as="textarea" rows={4} placeholder={'Mensaje'} name='mensaje' value={usuario.mensaje} onChange={handler}/>
          </Form.Group>
          <button className='btn btn-success btn-lg' type='submit'>Enviar Correo</button>
        </Form>
      </Container>
      </div>
    </main>

    <footer>
      <Footer import={importAll}/>
    </footer>
    </>
  )
} 

export default Contacto