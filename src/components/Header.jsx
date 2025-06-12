import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import { isAuthTokenContext } from '../Context/ContextShare';
function Header() {

const navigate=useNavigate()
const {isAuthToken,setIsAuthToken}=useContext(isAuthTokenContext)


const logout=()=>{
  if(sessionStorage.getItem("token"))
  {
    sessionStorage.removeItem("token");
  }
  if(sessionStorage.getItem("existingUser"))
  {
    sessionStorage.removeItem("existingUser")
  }
  setIsAuthToken(false)
  navigate('/')
}

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
          
          <Button variant="danger" onClick={logout}><i class="fa-solid fa-power-off me-2"></i>LOGOUT</Button>
          
        </Container>
      </Navbar>
   </>
  )
}

export default Header