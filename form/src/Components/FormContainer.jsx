import React, {useRef, useState, useEffect} from "react";
import FormBody from "./FormBody.jsx"
import { Form, Button, Col, Container, Row, Card } from "react-bootstrap";


function FormContainer() {
    const nameInput = useRef()
    const surnameInput = useRef()
    const emailInput = useRef()
    const titleInput = useRef()
    const noteInput = useRef()
  
    const [datas, setdatas] = useState([])
  
    useEffect(() => {
      
    }, [datas])
    
    const [id, setid] = useState(-1)
  
    function handleSubmit(event) {
      event.preventDefault()
      const name = nameInput.current.value
      const surname = surnameInput.current.value
      const email = emailInput.current.value
      const title = titleInput.current.value
      const note = noteInput.current.value
  
      setdatas([...datas, {name: name, surname: surname, email: email, title: title, note: note}]) 
      nameInput.current.value = ""
      surnameInput.current.value = ""
      emailInput.current.value = ""
      titleInput.current.value = ""
      noteInput.current.value = ""

      nameInput.current.focus();
    } 
    function deletePost(id) {
      datas.splice(id, 1);
      setdatas([...datas]);
    }
    function editPost(obj) {
      setid(obj.id)
      nameInput.current.value = obj.name
      surnameInput.current.value = obj.surname
      emailInput.current.value = obj.email
      titleInput.current.value = obj.title
      noteInput.current.value = obj.note
    }
    function editForm (event) {
      event.preventDefault()
      const name = nameInput.current.value
      const surname = surnameInput.current.value
      const email = emailInput.current.value
      const title = titleInput.current.value
      const note = noteInput.current.value
      let newArray = [...datas]
      newArray[id] = {name: name, surname: surname, email: email, title: title, note: note}
      setdatas(newArray)
      setid(-1)
      nameInput.current.value = ""
      surnameInput.current.value = ""
      emailInput.current.value = ""
      titleInput.current.value = ""
      noteInput.current.value = ""
      nameInput.current.focus();
    }


  return (
    <Container>
      <Row>
        <Col sm={6}>
          <FormBody datas={datas} deletePost={deletePost} editPost={editPost} />
        </Col>
        <Col sm={6}>
          <Card className="">
            <Form className="m-4" onSubmit={id>-1 ? editForm : handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Enter name" 
                  ref={nameInput}
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Surname</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Enter surname" 
                  ref={surnameInput}
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                  type="email" 
                  placeholder="Enter email" 
                  ref={emailInput}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Title</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Enter title" 
                  ref={titleInput}  
                />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Note</Form.Label>
                <Form.Control 
                  as="textarea" 
                  rows={3} 
                  ref={noteInput}
                />
              </Form.Group>

              <Button className="btn-block" variant={id>-1 ? "success" : "primary"} type="submit">
                {id>-1 ? "Edit" : "Submit"}
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default FormContainer;