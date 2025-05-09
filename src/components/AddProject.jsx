import React from 'react'
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
function AddProject() {
    const [show, setShow] = useState(false);  
    
    const [projectDetails,setProjectDetails]=useState({
      title:"",
      language:"",
      githubLink:"",
      websiteLink:"",
      overview:"",
      projectImage:""
    });


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const addProject=()=>{
      console.log("Project Details")
      console.log(projectDetails)
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
                <input type="file" id="projectImg" style={{display:'none'}}/>
                <img src="https://blog.sendgb.com/wp-content/uploads/2019/08/FileUpload-1024x512.png" width={'100%'}/>
            </label>
           </Col>
            <Col md={6} lg={6}>
              <div  className='mt-3'>
                <input type='text'placeholder='project Title' className='form-control'
                onChange={(e)=>setProjectDetails({...projectDetails,title:e.target.value})}/>
                </div>
                <div  className='mt-3'>
                <input type='text'placeholder='Technologies used' className='form-control'
                onChange={(e)=>setProjectDetails({...projectDetails,language:e.target.value})}/>
                </div>
                <div  className='mt-3'>
                <input type='text'placeholder='Github Link' className='form-control'
                onChange={(e)=>setProjectDetails({...projectDetails,githubLink:e.target.value})}/>
                </div>
                <div  className='mt-3'>
                <input type='text'placeholder='Website Link' className='form-control'
                onChange={(e)=>setProjectDetails({...projectDetails,websiteLink:e.target.value})}/>
                </div>
                <div className='mt-3'>
                    <textarea placeholder='Project Overview' rows={4} className='form-control'
                    onChange={(e)=>setProjectDetails({...projectDetails,overview:e.target.value})}>

                    </textarea>
                </div>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
         <Button variant='secondary' onClick={handleClose}>
            CANCEL</Button>

<Button variant='primary' onClick={addProject}>
    ADD PROJECT
    </Button>        
    </Modal.Footer>
      </Modal>

    </>
  )
}

export default AddProject