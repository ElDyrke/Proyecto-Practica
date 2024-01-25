import React from 'react'
import {Form} from 'react-bootstrap'
import "./Input.css"

const Input = (props) => {
  return (
    <Form.Group className="mb-3" controlId={props.controlId}>
      <Form.Control type={props.type} placeholder={props.placeholder} />
    </Form.Group>
  )
}

export default Input