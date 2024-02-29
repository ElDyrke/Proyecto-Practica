import React, { useState } from 'react'
import {Button, Form, Card, Container} from 'react-bootstrap'
import Input from "../Input/Input"
import { useMutation} from '@tanstack/react-query'
import { useNavigate } from "react-router-dom";
import { iniciarSesion } from '../../api/apiAustral'
import "./Form_usuario.css"

const Form_usuario = (props) => {
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState({
    username: '',
    password: ''
  })

  const login = useMutation({
    mutationFn: (data) => {
      return iniciarSesion.post('/', data)
    },
    onSuccess: (response) => {
      return navigate('/', { state: { email: usuario.username, token: response.data.token} })
    }
  })


  const handler = (e) => {
    e.preventDefault()
    const {name, value} = e.target
    login.reset()
    setUsuario({...usuario, [name]: value})
  }


  return (
      <Container id="Formulario" className={props.className}>
      <h3>Bienvenid@ a, <br/><span>Austral Travelers</span></h3>
      <p className='text-muted'>Para iniciar sesión, ingrese los datos solicitados</p>
        <Form action={props.action} method='post' onSubmit={(e) => {
          e.preventDefault()
          login.mutate(usuario)}}>
          <Input type="email" placeholder="Email@example.cl" controlId="formEmail" name={'username'} value={usuario.username} handler={handler}/>
          <Input type="password" placeholder="Contraseña" controlId="formPassword" name={'password'} value={usuario.password} handler={handler}/>
          <div className='ayudas text-muted'><a href="/Registrarse">Aún no tengo una cuenta</a><a href="">Olvidé mi contraseña</a></div>
          <button className='btn btn-success' type='submit' >Iniciar Sesión</button>
        </Form>
      {login.isError ? <span className='text-danger'>{login.error.message}</span>: null}
      </Container>
  )
}

export default Form_usuario