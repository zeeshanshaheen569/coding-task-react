import { useState } from "react";
import { Form, Modal } from "react-bootstrap";

const CustomModal = ({title,modalBody,footer,show,handleClose}:{
    title:string,
    modalBody:Function,
    footer:Function,
    show:boolean,
    handleClose:Function
})=> {
  
    return (
      <>
        <Modal show={show} onHide={()=>handleClose()}>
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
           {modalBody()}
          </Modal.Body>
          <Modal.Footer>
            {footer()}
          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default CustomModal;