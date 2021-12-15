import React from 'react'
import PropTypes from 'prop-types'
import { FormControl, FormGroup, FormLabel } from 'react-bootstrap'
import  { Row , ButtonToolbar, Dropdown, Nav, NavDropdown, Table, Modal} from 'react-bootstrap';
import { Card, Container, Form ,Button, Col, Alert} from "react-bootstrap";
import InputLogin from "../formInput/SignupForm";


const ModalInputEdit = ({show, onHide, onSubmit,value, label, change } ) => {
    return (
        <Modal size="lg" centered show={ show } onHide={ onHide } >
        <Modal.Header closeButton>
          <Modal.Title> Add new category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form onSubmit={onSubmit}>
           <br />
     
           <Form.Label>Your old category</Form.Label>
           <InputLogin  label={label}  value={value} change={change}/>
           <InputLogin  label={label}  value={value} change={change}/>
           <input type="submit" value="Edit category" />
         </form>
        </Modal.Body>
         </Modal>    
         )
}




ModalInputEdit.propTypes = {
    show: PropTypes.string,
    value: PropTypes.string,
    onHide: PropTypes.string,
    onSubmit: PropTypes.string,
    label: PropTypes.string,
    change: PropTypes.func
}

export default ModalInputEdit 