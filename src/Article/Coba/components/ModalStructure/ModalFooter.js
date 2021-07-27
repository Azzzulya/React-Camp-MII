import React from 'react'
import {Modal, Button} from 'react-bootstrap'

const ModalFooter = ({close, alertClick}) => {

  return (
    <Modal.Footer>
      <Button variant="secondary" onClick={close}>
        Close
      </Button>
      {/* <Button variant="primary" onClick={() => {close(); alertClick()}}>
        Show Alert
      </Button> */}
      <Button variant="primary" onClick={alertClick}>
        Save Changes
      </Button>
    </Modal.Footer>
  )
}

export default ModalFooter
