import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import authImage from '../assets/image2.png'
export default function Auth() {
  return (
   <>
   <div className='container-fluid ms-5 mt-3 mb-3'>
    <Link to={'/'} style={{textDecoration:'none'}}>
    
    <h5 className='text-warning fw-bold'><i class="fa-solid fa-arrow-left me-3"></i>BACK TO HOME</h5>
    </Link>
   
   </div>
   <div className='container-fluid bg-light'>
    <Row>
      <Col md={5} className='mb-5 ms-5 mt-5 d-flex justify-content-center align-items-center flex-column'>
      <img src={authImage} width={"70%"}/>
      </Col>
      <Col md={6}>
      <h4 className='text-center'><i class="fa-brands fa-stack-overflow me-3 text-warning"></i>PROJECT FAIR</h4>
<h5 className='text-center mt-2'>SIGNUP TO YOUR ACCOUNT</h5>
      <div className='w-100 d-flex justify-content-center flex-column align-items-center'>
        <input type='text' placeholder='Enter Name' className='form-control w-50 rounded mt-3'/>
        <input type='text' placeholder='Enter Email' className='form-control w-50 rounded mt-3'/>
        <input type='text' placeholder='Enter Password' className='form-control w-50 rounded mt-3'/> 
        
        <Link to={"/dashboard"} style={{textDecoration:'none'}}>
        <button className='btn btn-warning mt-3'>
        REGISTER
        </button>
        </Link>
       
      </div>
      <div>
        <p className='mt-2'>ALREADY A USER?<span style={{color:'blue'}}>LOGIN</span>

        </p>
      </div>
      </Col>
    </Row>
   </div>
   
   </>
  )
}
