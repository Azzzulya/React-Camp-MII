import React, {useState} from 'react';
import Button from './Article/Coba/components/Button/button';
import Modal from './Article/Coba/components/modal';
import Alert from 'react-bootstrap/Alert'


export default function JoinModal() {
  // const inputName = React.useRef(null)
  // const inputPhoto = React.useRef(null)

  const [show, setShow] = useState(false);
  const [alert, setAlert] = useState(false);
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const alertShow = () => setAlert(true);
  const handleAlert = () => setAlert(false);
  const descButton = ["login", "logout"]

  const handleSubmit = event => {
    event.preventDefault();
    console.log(name, password);
    // alert(inputName.current.files[0].name)
  }

  function LoginButton(props) {
    return (
      <button onClick={props.onClick}>
        Login
      </button>
    );
  }
  
  function LogoutButton(props) {
    return (
      <button onClick={props.onClick}>
        Logout
      </button>
    );
  }

  let button;
 

  return (
    <>
    {/* <AlertShow alert={alert} handleAlert={handleAlert} inputName={inputName}/> */}
     <Alert variant="success" show={alert} onClick={handleAlert} dismissible >
       <Alert.Heading>Hello, {name} Selamat Datang</Alert.Heading>
     </Alert>

     <Button onClick={handleShow} name={name} /> 
    {/* {(name != "admin") ?
       
       :
       <Button onClick={handleShow} name={name} desc={descButton[1]} />
      
    } */}

   
     {/* <Modal show={show} onHide={handleClose} alertClicked={alertShow} /> */}
     <Modal show={show} onHide={handleClose}  alertClicked={alertShow} inputName={name} setName={setName} password={password} setpassword={setPassword}/>
    </>
  )
}
