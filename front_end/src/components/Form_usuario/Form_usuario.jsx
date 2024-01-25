import React from 'react'
import {Button, Form, Card, Container} from 'react-bootstrap';
import Input from "../Input/Input"
import "./Form_usuario.css"

const Form_usuario = (props) => {
  return (
      <Container id="Formulario" className={props.className}>
      <h3>Bienvenid@ a, <br/><span>Austral Travelers</span></h3>
      <p className='text-muted'>Para iniciar sesión, ingrese los datos solicitados</p>
        <Form action={props.action} method='post'>
          <Input type="email" placeholder="Email@example.cl" controlId="formEmail" />
          <Input type="password" placeholder="Contraseña" controlId="formPassword" />
          <div className='ayudas text-muted'><a href="/Registrarse">Aún no tengo una cuenta</a><a href="">Olvidé mi contraseña</a></div>
          <Button variant="success" type="submit">
            Iniciar Sesión
          </Button>
        </Form>
      </Container>
  )
}

export default Form_usuario