import React from 'react'
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { base_url } from '../services/base_url';
//here project is the props variable from Myproject.jsx component
function EditPjoject({project}) {
     const [show, setShow] = useState(false);    
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
        console.log("Edit project details")
        console.log(project)
         const [projectDetails,setProjectDetails]=useState({
              title:project.title,
              language:project.language,
              githubLink:project.github,
              websiteLink:project.website,
              overview:project.overview,
              projectImage:project.projectImage
            });
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
                <input type="file" id="projectImg" style={{display:'none'}}/>
                <img src={`${base_url}/imagefolder/${projectDetails.projectImage}`} width={'100%'}/>
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
            CANCEL</Button>

<Button variant='primary' onClick={handleClose}>
   UPDATE PROJECT
    </Button>        
    </Modal.Footer>
      </Modal>
   </>
  )
}

export default EditPjoject