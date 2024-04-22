import React, { useState } from 'react'
import { Card } from 'react-bootstrap'

function View() {

  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
     <Card onClick={handleShow} style={{ width: '18rem' }}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>Title</Card.Title>

       </Card.Body>
    </Card>

    
    </>
  )
}

export default View