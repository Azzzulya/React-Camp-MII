import React, {useState} from 'react'
import { useHistory } from "react-router-dom";
import {Form, Button, Container, } from 'react-bootstrap'
// eslint-disable-next-line import/no-anonymous-default-export
export default ({ member}) => {
  const history = useHistory()

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [description, setDescription] = useState('')
  const [gender, setGender] = useState('')
  const [agreement, setAgreement] = useState(false)
  const [job, setJob] = useState(false)

  const handleSubmit = event => {
    event.preventDefault();
    console.log(name, password, description, gender, agreement, job);

    const data = {
      "username": name, 
      "password": password, 
      "job": job, 
      "gender": gender, 
      "description" : description,
      "aggrement" : agreement
    }

    member.push(data)
    console.log(member)
    localStorage.setItem("Member", JSON.stringify(member));
    history.push('/login')
  }
  return (
    // eslint-disable-next-line no-unreachable
    <div>
      <Container style={{width:"50%"}} className="my-5">
        <h2 className="mb-3">Register</h2>
        <Form onSubmit={handleSubmit} >
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="username" name="username" value={name} onChange={(e) => setName(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name="password"  value={password} onChange={(e) => setPassword(e.target.value)}/>
          </Form.Group>
          <Form.Group controlId="formGridState">
            <Form.Label>Job</Form.Label>
            <Form.Select defaultValue="Choose..." onChange={(e) => setJob(e.target.value)}>
              <option>Choose...</option>
              <option value="Web Developer">Web Developer</option>
              <option value="Dev Ops">Dev Ops</option>
              <option value="Mobile Developer">Mobile Developer</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="my-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={3} value={description} onChange={(e) => setDescription(e.target.value)}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Gender</Form.Label>
            <Form.Check type="radio" aria-label="radio 1" value={"male"} onChange={(e) => setGender(e.target.value)} label="Male"/>
            <Form.Check type="radio" aria-label="radio 2" value={"female"} onChange={(e) => setGender(e.target.value)} label="Female"/>
          </Form.Group>
          <Form.Group className="my-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Agreement this infotmation" value={true} onChange={(e) => setAgreement(e.target.value)}/>
          </Form.Group>

          <Button variant="primary" type="submit"> Register </Button>
        </Form>
           
      </Container>
     
    </div>
  )
}