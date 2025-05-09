import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link, Navigate } from 'react-router-dom'
import authImage from '../assets/image2.png'
import { loginApi, registerApi } from '../services/allApi'

import { ToastContainer, toast } from 'react-toastify';




export default function Auth({registerPage}) {
  const isRegisterPage=registerPage ? true : false;
//create a state to hold all innnnt values
const [userData,setUserData]=useState({
  name:"",
  email:"",
  password:""
})

const handleRegister=async()=>{
  console.log("user entered data")
  console.log(userData)
  const {name,email,password}=userData;
  if(!name|| !email || !password)
  {
    toast.warning("please fill the form completely!!!")
  }
  else{
    //call API to register user
    const result=await registerApi(userData)
    alert(result.status)
    if(result.status===201){
      toast.success("User Registered successfully")
      setUserData({
        name:"",
        email:"",
        password:""
      })
      //load login
      Navigate('/login')
    }
    else if(result.status===409){
      toast.warning(`${userData.email} Already exist,please login`)
    }
    
    else
    {
      toast.warning("something happened")
    }
  }
}



const handleLogin=async()=>{
  console.log("inside handle login function")
  const {email,password}=userData;
  console.log(email,password)
  if(!email||!password){
    toast.warning("Please fill the form completely")
  }
  else{
      const result=await loginApi(userData);
      console.log("respone from login")
      console.log(result)
      if(result.status===200){
        sessionStorage.setItem("existingUser",JSON.stringify(result.data.user_data));
        sessionStorage.setItem("token",result.data.jwttoken)
        toast.success("Login successfully");
        navigate('/')
      }
      else if(result.status===406){
toast.error("Email or Password mismatch!!!")
      }
      else{
        toast.error("Some happened")
      }


  }
}
useEffect(()=>{
  setUserData({
    name:"",
    email:"",
    password:""

  })
},[registerPage])
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
      {
        isRegisterPage?
        <h5 className='text-center mt-2'>SIGNUP TO YOUR ACCOUNT</h5> :
        <h5 className='text-center mt-2'>LOGIN TO YOUR ACCOUNT</h5>
      }


       
      <div className='w-100 d-flex justify-content-center flex-column align-items-center'>
      {
          isRegisterPage &&
          <input type='text' placeholder='Enter Name' value={userData.name} 
        className='form-control w-50 rounded mt-3' onChange={(e)=>setUserData({...userData,name:e.target.value})}/>
        }
        
        <input type='text' placeholder='Enter Email' value={userData.email}
        className='form-control w-50 rounded mt-3' onChange={(e)=>setUserData({...userData,email:e.target.value})}/>
        <input type='password' placeholder='Enter Password' value={userData.password}
        className='form-control w-50 rounded mt-3' onChange={(e)=>setUserData({...userData,password:e.target.value})}/> 
        
      {
        isRegisterPage?
        <button className='btn btn-warning mt-3' onClick={handleRegister}>
        REGISTER
        </button> :
        <button className='btn btn-warning mt-3' onClick={handleLogin}>
        LOGIN
        </button>

      }
        
        
       
      </div>
      <div>
        {
          isRegisterPage ?
          <Link to="/login" style={{textDecoration:"none"}}>
                <p className='mt-2'>ALREADY A USER?<span style={{color:'blue'}}>LOGIN</span></p>
          </Link>
          :
          <Link to="/register" style={{textDecoration:"none"}}>
                <p className='mt-2'>NOT REGISTERED YET?<span style={{color:'blue'}}>REGISTER NOW</span></p>
          </Link>
        }
        

        
      </div>
      </Col>
    </Row>
   </div>
   <ToastContainer
   position="top-center"
   autoClose={1000} />
   </>
  )
}
