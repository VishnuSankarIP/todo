import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
   <>
   
   <Navbar expand="lg"  bg='white'>
      <Container>
      <Navbar.Brand>
          <Link style={{textDecoration:'none',color:'black',fontFamily:"Manrope"}} className='fw-bolder' to={'/'}>Todo</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <Navbar.Brand>
          <Link style={{textDecoration:'none',color:'black',fontFamily:"Manrope"}}  to={'/property'}>Home</Link>
        </Navbar.Brand>
        <Navbar.Brand>
          <Link style={{textDecoration:'none',color:'black',fontFamily:"Manrope"}}  to={'/contact'}>Services</Link>
        </Navbar.Brand>
        <Navbar.Brand>
          <Link style={{textDecoration:'none',color:'black',fontFamily:"Manrope"}}  to={'/view'}>View</Link>
        </Navbar.Brand>
        
      <button  style={{width:'150px',height:'40px',borderColor:'#9AA0FC',borderRadius:"10px",fontFamily:"Manrope",backgroundColor:'#9AA0FC'}}>Sign out</button>
      
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </>
  )
}

export default Header