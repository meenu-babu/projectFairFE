import React from 'react'
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function EditPjoject() {
     const [show, setShow] = useState(false);    
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
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
                <img src="https://blog.sendgb.com/wp-content/uploads/2019/08/FileUpload-1024x512.png" width={'100%'}/>
            </label>
           </Col>
            <Col md={6} lg={6}>
              <div  className='mt-3'>
                <input type='text'placeholder='project Title' className='form-control'/>
                </div>
                <div  className='mt-3'>
                <input type='text'placeholder='Technologies used' className='form-control'/>
                </div>
                <div  className='mt-3'>
                <input type='text'placeholder='Github Link' className='form-control'/>
                </div>
                <div  className='mt-3'>
                <input type='text'placeholder='Website Link' className='form-control'/>
                </div>
                <div className='mt-3'>
                    <textarea placeholder='Project Overview' rows={4} className='form-control'>

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