import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
import ModalHeader from './ModalStructure/ModalHeader';
import ModalBody from './ModalStructure/ModalBody';
import ModalFooter from './ModalStructure/ModalFooter';

export default function modal({show, onHide, handleSubmit, inputName, alertClicked, setName, name, password, setPassword}) {
 

  return (
       <Modal show={show} onHide={onHide}>
         <ModalHeader />
         <ModalBody>
         <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="username" name="username" value={name} onChange={(e) => setName(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" name="password" />
            </Form.Group>
          </Form>
          {/* <p>Woohoo, you're reading this text in a modal!</p> */}
         </ModalBody>
         <ModalFooter close={onHide} alertClick={alertClicked} />
         {/* <ModalFooter close={onHide} /> */}
        {/* <Modal.Body></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
  )
}
