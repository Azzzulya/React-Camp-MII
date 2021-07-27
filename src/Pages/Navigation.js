import React from 'react'
import { Nav, Navbar} from 'react-bootstrap'

export default function Navigation({isLogin, setLogin}) {
  return (
    <>
       <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="px-5">
            <Navbar.Brand href="/">React-Camp-MII</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/chart">Chart</Nav.Link>
                <Nav.Link href="/register">Register</Nav.Link>
                {isLogin
                  ? <Nav.Link to="/logout" onClick={(e) => {
                  e.preventDefault()
                  setLogin(false)
                  }} >Logout</Nav.Link> : <Nav.Link href="/login">Login</Nav.Link>
                }

              </Nav>
            </Navbar.Collapse>
        </Navbar>
    </>
  )
}
