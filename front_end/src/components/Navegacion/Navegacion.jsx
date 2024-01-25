import React from 'react'
import "./Navegacion.css"
import logo from "../../assets/logos/logo austral verde.png"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Navegacion = () => {
  return (
    <Navbar expand='md' fixed='top'>
      <Container fluid>
        <Navbar.Brand href='/'>
          <img src={logo}/>
        </Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Offcanvas>
          <Offcanvas.Header>
            <Offcanvas.Title>
              Austral Travelers
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link className='pe-4' href="/#Inicio">Inicio</Nav.Link>
              <Nav.Link className='pe-4' href="/#Nosotros">Nosotros</Nav.Link>
              <Nav.Link className='pe-4' href="/#Viajes">Viajes</Nav.Link>
              <Nav.Link className='pe-4' href="/Iniciar-sesion">Iniciar Sesión</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
}

export default Navegacion