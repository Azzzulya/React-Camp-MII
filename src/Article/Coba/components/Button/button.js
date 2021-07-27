import React from 'react'
import { Button } from 'react-bootstrap';

export default function button({onClick, name, desc}) {

  const data = {
    name : "uhuy",
    password : "cek",
    desc : "login"
  }

  const handleLogout = () => {
    data.name = '';
    data.desc = "logout";
  }

  const showButton = () => {
    // eslint-disable-next-line eqeqeq
    name != data.name ?
    <Button variant="primary" size="lg"  onClick={onClick} > {data.desc}  </Button>
  :
    <Button variant="primary" size="lg"  onClick={handleLogout} > Logout </Button>
  }

  return (
      // <Button variant="primary" size="lg"  onClick={onClick}>
      //   {desc}
      // </Button>
      <>
        {
          showButton()
        }
    </>
  )
}
