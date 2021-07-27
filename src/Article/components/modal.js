import React from 'react'
import Modal from 'react-bootstrap/Modal'
import ModalHeader from './ModalStructure/ModalHeader';
import ModalBody from './ModalStructure/ModalBody';
import ModalFooter from './ModalStructure/ModalFooter';

export default function modal({show, onHide, alertClicked}) {
  return (
       <Modal show={show} onHide={onHide}>
         <ModalHeader />
         <ModalBody>
          <p>Woohoo, you're reading this text in a modal!</p>
         </ModalBody>
         <ModalFooter close={onHide} alertClick={alertClicked} />
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
