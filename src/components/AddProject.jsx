import React, { useEffect } from 'react'
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
function AddProject() {
    const [show, setShow] = useState(false);  
    
const [token,setToken]=useState("")

    const [projectDetails,setProjectDetails]=useState({
      title:"",
      language:"",
      githubLink:"",
      websiteLink:"",
      overview:"",
      projectImage:""
    });


const [preview,setPreview]=useState("")

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(()=>{
      if(projectDetails.projectImage){
        setPreview(URL.createObjectURL(projectDetails.projectImage))
      }
    },[projectDetails.projectImage])

useEffect(()=>{
  if(sessionStorage.getItem('token')){
    setToken(sessionStorage.getItem('token'))

  }
},[])


    const addProject=()=>{
      console.log("Project Details")
      console.log(projectDetails);
       const {title,language,githubLink,websiteLink,overview,projectImage}=projectDetails
      if(!title || !language || !githubLink ||!websiteLink ||! overview ||!projectImage ){
        toast.warning("Please fill the form completely!!!!")
      }
        else{
          //send data to backend
          //here we have to send a file,so instead of sending object we are passing data as form data
          const reqBody=new FormData();
          reqBody.append("title",title)
          reqBody.append("language",language)
          reqBody.append("githubLink",githubLink)
          reqBody.append("websiteLink",websiteLink)
          reqBody.append("overview",overview)
          reqBody.append("projectImage",projectImage)

           const reqHeader={
            "Content-Type":"multipart/form-data",
            "Authorization":`Bearer ${token}`
           }
        }

 
    }

    const handleClear=()=>{
      setProjectDetails({
         title:"",
      language:"",
      githubLink:"",
      websiteLink:"",
      overview:"",
      projectImage:""
      })
      setPreview("")
    }
  return (
    <>
        <button className='btn btn-success'  onClick={handleShow}>ADD PROJECT</button>


        <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title className='text-success'>ADD NEW PROJECT</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6} lg={6}>
            <label htmlFor='projectImg'>
                <input type="file" id="projectImg" style={{display:'none'}}
                onChange={(e)=>setProjectDetails({...projectDetails,projectImage:e.target.files[0]})}/>
                <img src={preview?preview:"https://blog.sendgb.com/wp-content/uploads/2019/08/FileUpload-1024x512.png"} className='w-75'/>
                {/*  <img src="https://blog.sendgb.com/wp-content/uploads/2019/08/FileUpload-1024x512.png" width={'100%'}/> */}
            </label>
           </Col>
            <Col md={6} lg={6}>
              <div  className='mt-3'>
                <input type='text'placeholder='project Title' className='form-control'
                value={projectDetails.title}
                onChange={(e)=>setProjectDetails({...projectDetails,title:e.target.value})}/>
                </div>
                <div  className='mt-3'>
                <input type='text'placeholder='Technologies used' className='form-control'
                value={projectDetails.language}
                onChange={(e)=>setProjectDetails({...projectDetails,language:e.target.value})}/>
                </div>
                <div  className='mt-3'>
                <input type='text'placeholder='Github Link' className='form-control'
                value={projectDetails.githubLink}
                onChange={(e)=>setProjectDetails({...projectDetails,githubLink:e.target.value})}/>
                </div>
                <div  className='mt-3'>
                <input type='text'placeholder='Website Link' className='form-control'
                value={projectDetails.websiteLink}
                onChange={(e)=>setProjectDetails({...projectDetails,websiteLink:e.target.value})}/>
                </div>
                <div className='mt-3'>
                    <textarea placeholder='Project Overview' rows={4} className='form-control'
                    value={projectDetails.overview}
                    onChange={(e)=>setProjectDetails({...projectDetails,overview:e.target.value})}>

                    </textarea>
                </div>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
         <Button variant='secondary' onClick={handleClear}>
            CLEAR</Button>

<Button variant='primary' onClick={addProject}>
    ADD PROJECT
    </Button>        
    </Modal.Footer>
      </Modal>
<ToastContainer
   position="top-center"
   autoClose={1000} />
    </>
  )
}

export default AddProject