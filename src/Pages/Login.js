import React, {useState} from 'react'
import { useHistory } from "react-router-dom";
import {Form, Button, Container} from 'react-bootstrap'
// eslint-disable-next-line import/no-anonymous-default-export
export default ({setLogin, }) => {

  const history = useHistory()

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  
  const data = JSON.parse(localStorage.getItem("Member"))

  console.log("data", data)

  const handleSubmit = event => {
    event.preventDefault();
    console.log(name, password);
    filterDate()
  }

  const filterDate = ( ) => {
    let checked = data.filter((item) => {
      if (item.username === name && item.password === password) {
        history.push('/chart')
      }
      else{
        alert("Please, check your username or your password")
      }
    })
  }

  return (
    // eslint-disable-next-line no-unreachable
    <div>
      <Container style={{width:"50%"}} className="my-5">
        <h2 className="mb-3">Login</h2>
        <Form onSubmit={handleSubmit} >
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="username" name="username" onChange={(e) => setName(e.target.value)}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" onChange={(e) => setPassword(e.target.value)}/>
              </Form.Group>
  
              <Button variant="primary" type="submit" onClick={()=>{setLogin(true)}}> Login </Button>
              <p className="p-1"> You dont have an account ? register here <a href="/register">Register</a></p>

            
        </Form>
            
      </Container>
     
    </div>
  )
}