import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
function Header() {
  return (
   <>
   <Navbar className="bg-primary">
        <Container>
          <Link to={'/'} style={{textDecoration:'none'}}>
          <Navbar.Brand >
          <i class="fa-brands fa-stack-overflow me-3 text-warning"></i>
            PROJECT FAIR
          </Navbar.Brand>
          </Link>
          
          <Button variant="danger"><i class="fa-solid fa-power-off me-2"></i>LOGOUT</Button>
          
        </Container>
      </Navbar>
   </>
  )
}

export default Header