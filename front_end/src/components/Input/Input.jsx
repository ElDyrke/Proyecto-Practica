import React from 'react'
import {Form} from 'react-bootstrap'
import "./Input.css"

const Input = ({controlId, type, name, placeholder, value, handler}) => {
  return (
    <Form.Group className="mb-3" controlId={controlId}>
      <Form.Control type={type} name={name} placeholder={placeholder} value={value} onChange={handler}/>
    </Form.Group>
  )
}

export default Input