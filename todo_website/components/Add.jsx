import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { addProjectAPI } from '../Services/allAPI';

function Add() {

  const [show, setShow] = useState(false);

 const[projectDetails,setProjectDetails]=useState({title:"",todo1:"",todo2:"",todo3:"",todo4:"",todo5:""})
console.log(projectDetails);
  const handleClose = () => {
    setProjectDetails({title:"",todo1:"",todo2:"",todo3:"",todo4:"",todo5:""})
    setShow(false);}
  const handleShow = () => setShow(true);

  const handleUploadProject = async () => {
    const { title, todo1, todo2, todo3, todo4, todo5 } = projectDetails;
    if (!title || !todo1 || !todo2 || !todo3 || !todo4 || !todo5) {
        alert("Please fill out the form completely.");
    } else {
        // const reqBody={
        //     title,
        //     todo1,
        //     todo2,
        //     todo3,
        //     todo4,
        //     todo5
            
        // };
        const reqBody = new FormData()
        reqBody.append("title", title)
        reqBody.append("todo1", todo1)
        reqBody.append("todo2", todo2)
        reqBody.append("todo3", todo3)
        reqBody.append("todo4", todo4)
        reqBody.append("todo5", todo5)

        const token = sessionStorage.getItem("token");
        if (token) {
            const reqHeader = {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            };
            
            try {
                const result = await addProjectAPI(reqBody,reqHeader);
                console.log(result);
                if (result.status === 200) {
                    setAddResponse(result);
                    alert(`project has been added successfully.`);
                    handleClose();
                } else {
                    alert(result.response.data);
                }
            } catch (err) {
                console.log(err);
            }
        }
    }
};



  
  return (
    <>
      <div className='p-5'>
        <button onClick={handleShow} style={{width:'150px',height:'40px',borderColor:'#9AA0FC',borderRadius:"10px",fontFamily:"Manrope",backgroundColor:'#9AA0FC'}}>Add project</button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Project or Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="projectTitle">
            <Form.Label>Project Title:</Form.Label>
            <Form.Control type="text" value={projectDetails.title} onChange={(e)=>setProjectDetails({...projectDetails,title:e.target.value})} placeholder="Enter project title" />
          </Form.Group>
          <Form.Group controlId="projectTitle">
            <Form.Label>Todo1</Form.Label>
            <Form.Control type="text" value={projectDetails.todo1} onChange={(e)=>setProjectDetails({...projectDetails,todo1:e.target.value})} placeholder="Enter Todo1" />
          </Form.Group>
          <Form.Group controlId="projectTitle">
            <Form.Label>Todo2</Form.Label>
            <Form.Control type="text" value={projectDetails.todo2} onChange={(e)=>setProjectDetails({...projectDetails,todo2:e.target.value})} placeholder="Enter Todo2" />
          </Form.Group>
          <Form.Group controlId="projectTitle">
            <Form.Label>Todo3</Form.Label>
            <Form.Control type="text" value={projectDetails.todo3} onChange={(e)=>setProjectDetails({...projectDetails,todo3:e.target.value})} placeholder="Enter Todo3" />
          </Form.Group>
          <Form.Group controlId="projectTitle">
            <Form.Label>Todo4</Form.Label>
            <Form.Control type="text" value={projectDetails.todo4} onChange={(e)=>setProjectDetails({...projectDetails,todo4:e.target.value})} placeholder="Enter Todo4" />
          </Form.Group>
          <Form.Group controlId="projectTitle">
            <Form.Label>Todo5</Form.Label>
            <Form.Control type="text" value={projectDetails.todo5} onChange={(e)=>setProjectDetails({...projectDetails,todo5:e.target.value})} placeholder="Enter Todo5" />
          </Form.Group>
         
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUploadProject}>
            Add Project
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Add;
