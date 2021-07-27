import React from 'react'
import Alert from 'react-bootstrap/Alert'

const AlertShow = ({inputName, handleAlert}) => {
  return (
    <Alert variant="success" show={alert} onClick={handleAlert} dismissible >
       <Alert.Heading>{inputName}</Alert.Heading>
     </Alert>
  )
}

export default AlertShow;