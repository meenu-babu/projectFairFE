import React, { useEffect, useState } from 'react'
import AddProject from './AddProject'
import { Link } from 'react-router-dom'
import EditPjoject from './EditPjoject'
import { getUserProjectApi } from '../services/allApi'

function MyProject() {
  const [userProject,setUserProject]=useState([])
const getUserProject=async()=>{
  const token=sessionStorage.getItem("token");
  const requestHeader={
    "Content-Type":'application/json',
    "Authorization":`Bearer ${token}`
  }
  const result=await getUserProjectApi(requestHeader);
  console.log("user projects");
  console.log(result.data)
  setUserProject(result.data)
}

useEffect(()=>{
  getUserProject
},[])

  return (
    <>
    <div className='shadow p-5 mb-5'>
        <div className='d-flex'>
            <h5 className='text-success me-auto'>MY PROJECTS</h5>
            <AddProject/>
        </div>
        <div className='p-3 mt-3 rounded d-flex' style={{backgroundColor:'lightgray'}}>
            <h6>MEDIA PLAYER</h6>
                <div className='d-flex ms-auto align-items-center'>
                    <Link>
                    <i class="fa-brands fa-github fa-lg me-3" style={{color:'blue'}}></i>
                    </Link>
                    <Link>
                    <i class="fa-solid fa-link  fa-lg " style={{color:'blue'}}></i>
                    </Link>
                    <EditPjoject/>
                </div>

        </div>
    </div>
    
    </>
  )
}

export default MyProject