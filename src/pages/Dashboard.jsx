import React, { useEffect, useState } from 'react'
import MyProject from '../components/MyProject'
import Profile from '../components/Profile'

function Dashboard() {

  const [name,setName]=useState("")
  useEffect(()=>{
    //js data type of object stored in session storage is string
    //to convert back to jsobject we have to use json.parse()
    let data=sessionStorage.getItem("existingUser")
    let temp=JSON.parse(data);
    setName(temp.name)
      // setName(JSON.parse(sessionStorage.getItem("existigUser")).name)
  },[])
  return (
    <>

    <div className='container-fluid'>
      <h4 className='my-4 ms-4'>WELCOME<span className='text-warning'>{name}</span></h4>
      <div className='row'>
        <div className='col-md-8'>
         <MyProject/>
        </div>
        <div className='col-md-4'>
          <Profile/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Dashboard