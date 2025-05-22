import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import firstImage from '../assets/image1.png'
import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import { getHomeProjectApi } from '../services/allApi'

function Home() {

  const [islogin,setIsLogin]=useState(false);
const [homeProject,setHomeProject]=useState([])


  const getHomeProject=async()=>{
    const result=await getHomeProjectApi();
    console.log("HOME PROJECT");
    console.log(result)
    setHomeProject(result.data)
  }

useEffect(()=>{
  getHomeProject()
},[])
  useEffect(()=>{
    if(sessionStorage.getItem("token")){
        setIsLogin(true)
    }
  },[])
  return (
   <>
   <div className='container-fluid bg-success p-5'style={{width:'100%',height:'100vh'}}>
    <Row>
      <Col md={6} lg={6} className='d-flex justify-content-center align-items-center flex-column'>
      <div>
        <h3 className='text-secondary'>PROJECT FAIR</h3>
        <h6>
          One stop destination for all software projects
        </h6>
        {
          !islogin ?
          <Link to="/login" style={{textDecoration:'none'}}>
          <button className='btn btn-outline-light mt-3'>GET STARTED<i class="fa-solid fa-arrow-right ms-3"></i></button>
          </Link>
          :
          <Link to="/dashboard" style={{textDecoration:'none'}}>
          <button className='btn btn-outline-light mt-3'>MANAGE PROJECTS<i class="fa-solid fa-arrow-right ms-3"></i></button>
          </Link>

        }
       
        
      </div>
      </Col>
      <Col  md={6} lg={6}>
      <img src={firstImage} width={'75%'}/>
      </Col>
    </Row>
   </div>
   {/* second portion */}
   <div  className='container-fluid'>
    <h3 className='text-center my-5'>EXPLORE YOUR PROJECTS</h3>
    <div className='row mb-5'>
      <marquee scrollamount="10">
        <div className='row'>
          {
          homeProject.length>0 &&
          homeProject.map(item=>(
            <div className='col-md-4 col-lg-4 justify-content-center d-flex p-4' style={{width:'400px'}}>
      <ProjectCard projectData={item}/>
      </div>
          )
          )
        }
        </div>
      
      </marquee>
      <Link to={'/project'} style={{textDecoration:'none'}}>
     <h5 className='text-center text-warning my-5 fw-bold'>SEE MORE PROJECTS</h5>
     </Link>
    </div>

   </div>
   </>
  )
}

export default Home