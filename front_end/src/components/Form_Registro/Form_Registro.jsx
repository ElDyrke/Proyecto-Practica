import React from 'react'
import "./Form_Registro.css"
import {Button, Form, Card, Container} from 'react-bootstrap';
import Input from "../Input/Input"

const Form_Registro = (props) => {

  return (
    <Container id="Formulario" className={props.className}>
      <h3>Bienvenid@ a, <br/><span>Austral Travelers</span></h3>
      <p className='text-muted'>Para registrarse, ingrese los datos solicitados</p>
        <Form action={props.action} method='post'>
          <Input type="text" placeholder="Nombre" controlId="formNombre" />
          <Input type="text" placeholder="Apellido" controlId="formApellido" />
          <Input type="email" placeholder="Email@example.cl" controlId="formEmail" />
          <Input type="password" placeholder="Contraseña" controlId="formPassword" />
          <div className='ayudas text-muted'><a href="/Iniciar-Sesion">Ya tengo una cuenta</a><a href="">Olvidé mi contraseña</a></div>
          <Button variant="success" type="submit">
            Registrarse
          </Button>
        </Form>
      </Container>
  )
}

export default Form_Registro