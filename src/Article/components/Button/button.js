import React from 'react'
import { Button } from 'react-bootstrap';

export default function button({onClick}) {
  return (
      <Button variant="primary" size="lg"  onClick={onClick}>
        Click Here
      </Button>
  )
}
