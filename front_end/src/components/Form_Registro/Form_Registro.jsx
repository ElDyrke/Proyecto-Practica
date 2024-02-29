import React from 'react'
import "./Form_Registro.css"
import {Button, Form, Card, Container} from 'react-bootstrap';
import Input from "../Input/Input"
import { useMutation} from '@tanstack/react-query'
import { iniciarSesion, registro } from '../../api/apiAustral'

const Form_Registro = (props) => {
  const [usuario, setUsuario] = useState({
    nombre: '',
    apellido: '',
    username: '',
    password: ''
  })

  const registrar = useMutation({
    mutationFn: (data) => {
      return registro.post('/', data)
    },
    onSuccess: (response) => {
      const usuario = response.data
      return iniciarSesion.post('/', {email: usuario.email, password: usuario.password})
    }
  })


  const handler = (e) => {
    e.preventDefault()
    const {name, value} = e.target
    registrar.reset()
    setUsuario({...usuario, [name]: value})
  }

  return (
    <Container id="Formulario" className={props.className}>
      <h3>Bienvenid@ a, <br/><span>Austral Travelers</span></h3>
      <p className='text-muted'>Para registrarse, ingrese los datos solicitados</p>
        <Form action={props.action} method='post' onSubmit={
          (e) => {
            e.preventDefault()
            registrar.mutate(usuario)
          }
        }>
          <Input type="text" placeholder="Nombre" controlId="formNombre" name={'nombre'} value={usuario.nombre} handler={handler}/>
          <Input type="text" placeholder="Apellido" controlId="formApellido" name={'apellido'} value={usuario.apellido} handler={handler}/>
          <Input type="email" placeholder="Email@example.cl" controlId="formEmail" name={'email'} value={usuario.email} handler={handler}/>
          <Input type="password" placeholder="Contraseña" controlId="formPassword" name={'password'} value={usuario.password} handler={handler}/>
          <div className='ayudas text-muted'><a href="/Iniciar-Sesion">Ya tengo una cuenta</a><a href="">Olvidé mi contraseña</a></div>
          <Button variant="success" type="submit">
            Registrarse
          </Button>
        </Form>
      </Container>
  )
}

export default Form_Registro