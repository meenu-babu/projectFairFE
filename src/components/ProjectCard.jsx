import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Col, Row } from "react-bootstrap";
import mediaplayer from '../assets/mediaplayer.png'
import { Link } from "react-router-dom";
function ProjectCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card style={{ width: "100%" }} className="shadow rounded-0 border-0">
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text></Card.Text>
          <Button variant="primary" onClick={handleShow}>
            Go somewhere
          </Button>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>MEDIA PLAYER</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6} lg={6}>
            <img src={mediaplayer} width={'100%'}/>
            
            </Col>
            <Col md={6} lg={6}>
              <h5>Description:</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Laudantium eveniet facilis hic consectetur rerum, dolorum earum
                aperiam illo expedita ipsa, ipsam aliquid debitis adipisci,
                perspiciatis numquam quisquam nemo. Fugiat, aspernatur.
              </p>
              <h5>Technologies:</h5>
              <p>React,JSON server,Bootstrap</p>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Link to="" target='_blank'>
          <i className="fa-brands fa-github fa-2x me-3"></i>
          </Link>
          <Link to="" target='_blank'>
          <i className="fa-solid fa-link fa-2x"></i>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProjectCard;
