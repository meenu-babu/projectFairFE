import React, { useContext, useEffect } from 'react'
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { base_url } from '../services/base_url';
import { toast } from 'react-toastify';
import { updateProjectApi } from '../services/allApi';
import { editProjectResponseContext } from '../Context/ContextShare';

//here project is the props variable from Myproject.jsx component
function EditPjoject({project}) {
  const [preview, setpreview] = useState("")
     const [show, setShow] = useState(false); 
     const {editProjectResponse,setEditProjectResponse}=useContext(editProjectResponseContext)
     

        const handleClose = () =>{
           setShow(false);
           resetForm()
        }
        const handleShow = () => setShow(true);
        
        console.log("Edit project details")
        console.log(project)


         const [projectDetails,setProjectDetails]=useState({
              id:project._id,
              title:project.title,
              language:project.language,
              githubLink:project.github,
              websiteLink:project.website,
              overview:project.overview,
              projectImage:""
            });


            useEffect(()=>{
              if(projectDetails.projectImage){
                setpreview(URL.createObjectURL(projectDetails.projectImage))
              }
            },[projectDetails.projectImage])


//to reset the form fields
           const resetForm=()=>{
            setProjectDetails({
              id:project._id,
              title:project.title,
              language:project.language,
              githubLink:project.github,
              websiteLink:project.website,
              overview:project.overview,
              projectImage:""
            })
            setpreview("")
           } 

const handleCloseClear=()=>{
  handleClose();
  resetForm();
}


            const handleUpdate=async()=>{
              console.log("Updated projrct details")
              console.log(projectDetails)
              const {id,title,language,githubLink,websiteLink,overview,projectImage}=projectDetails;
              if(!title||!language||!githubLink||!websiteLink||!overview){
                toast.warning("Please fill form completely")
              }
              else{
                     //send data to backend
          //here we have to send a file,so instead of sending object we are passing data as form data
          const reqBody=new FormData();
          reqBody.append("title",title);
          reqBody.append("language",language);
          reqBody.append("githubLink",githubLink);
          reqBody.append("websiteLink",websiteLink);
          reqBody.append("overview",overview);
          preview?reqBody.append("projectImage",projectImage):reqBody.append("projectImage",project.projectImage)
          const token=sessionStorage.getItem("token")
          if(preview){
            const reqHeader={
              "Content-Type":"multipart/form-data",
              "Authorization":`Bearer ${token}`
            }
            const result=await updateProjectApi(projectDetails.id,reqBody,reqHeader)
             if(result.status===200){
              setEditProjectResponse(result.data)
              toast.success(`${title} updated successfully`)
              setShow(false)
            }
            else{
              toast.error("something happened")
            }
          }
              else{
                const reqHeader={
              "Content-Type":"application/json",
              "Authorization":`Bearer ${token}`
            }
            const result=await updateProjectApi(id,reqBody,reqHeader)
            if(result.status===200){
              setEditProjectResponse(result.data)
              toast.success(`${title} updated successfully`)
              setShow(false)
            }
            else{
              toast.error("something happened")
            }
           
              }

              }
            }
  return (
   <>
   <i class="fa-solid fa-pen-to-square ms-3 text-danger" onClick={handleShow}></i>

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
                <img src={preview ? preview :`${base_url}/imagefolder/${project.projectImage}`}
                 width={'100%'}/>
                {/* the /image folder is obtained form serverside index.js */}
            </label>
           </Col>
            <Col md={6} lg={6}>
              <div  className='mt-3'>
                <input type='text'placeholder='project Title' 
                onChange={(e)=>setProjectDetails({...projectDetails,title:e.target.value})}
                value={projectDetails.title} className='form-control'/>
                </div>
                <div  className='mt-3'>
                <input type='text'placeholder='Technologies used'
                onChange={(e)=>setProjectDetails({...projectDetails,language:e.target.value})}
                value={projectDetails.language} className='form-control'/>
                </div>
                <div  className='mt-3'>
                <input type='text'placeholder='Github Link'
                onChange={(e)=>setProjectDetails({...projectDetails,githubLink:e.target.value})}
                value={projectDetails.githubLink} className='form-control'/>
                </div>
                <div  className='mt-3'>
                <input type='text'placeholder='Website Link'
                onChange={(e)=>setProjectDetails({...projectDetails,websiteLink:e.target.value})}
                value={projectDetails.websiteLink} className='form-control'/>
                </div>
                <div className='mt-3'>
                    <textarea placeholder='Project Overview' rows={4} 
                    onChange={(e)=>setProjectDetails({...projectDetails,overview:e.target.value})}
                    value={projectDetails.overview} className='form-control'>

                    </textarea>
                </div>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
         <Button variant='secondary' onClick={handleClose}>
            reset</Button>

<Button variant='primary' onClick={handleUpdate}>
   UPDATE PROJECT
    </Button>        
    </Modal.Footer>
      </Modal>
   </>
  )
}

export default EditPjoject