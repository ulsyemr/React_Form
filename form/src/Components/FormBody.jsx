import React from "react";
import { Container, Accordion, Button, Card, ListGroup } from "react-bootstrap";

function FormBody(props) {
  return (
    <div>
      {props.datas.map((data, index) => {
        return (
          <div>
            <Container className="mb-4">
              <Accordion defaultActiveKey="0">
                <Card>
                  <Card.Header>
                    <Accordion.Toggle
                      as={Button}
                      variant="link"
                      eventKey="0"
                      className="btn-block"
                    >
                      <p className="d-inline-block text-primary float-left mt-2">
                        <b>
                          {data.name} {data.surname}
                        </b>
                      </p>
                      <div className="d-inline-block float-right">
                        <Button 
                          className="mx-1" 
                          variant="success"
                          onClick = {() => 
                            props.editPost({
                              id: index,
                              name: data.name,
                              surname: data.surname,
                              email: data.email,
                              title: data.title,
                              note: data.note,
                            })
                          }
                        >
                          <i class="fas fa-user-edit"></i>
                        </Button>
                        <Button
                          className="mx-1"
                          type="submit"
                          variant="danger"
                          onClick={() => props.deletePost(index)}
                        >
                          <i class="fas fa-user-minus"></i>
                        </Button>
                      </div>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <ListGroup className="my-2"> 
                        <ListGroup.Item>
                          <b>Name</b>
                        </ListGroup.Item>
                        <ListGroup.Item>{data.name}</ListGroup.Item>
                      </ListGroup>
                      <ListGroup className="my-2">
                        <ListGroup.Item>
                          <b>Surname</b>
                        </ListGroup.Item>
                        <ListGroup.Item>{data.surname}</ListGroup.Item>
                      </ListGroup>
                      <ListGroup className="my-2">
                        <ListGroup.Item>
                          <b>E-mail</b>
                        </ListGroup.Item>
                        <ListGroup.Item>{data.email}</ListGroup.Item>
                      </ListGroup>
                      <ListGroup className="my-2">
                        <ListGroup.Item>
                          <b>Title</b>
                        </ListGroup.Item>
                        <ListGroup.Item>{data.title}</ListGroup.Item>
                      </ListGroup>
                      <ListGroup className="my-2">
                        <ListGroup.Item>
                          <b>Note</b>
                        </ListGroup.Item>
                        <ListGroup.Item>{data.note}</ListGroup.Item>
                      </ListGroup>
                      
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Container>
          </div>
        );
      })}
    </div>
  );
}

export default FormBody;