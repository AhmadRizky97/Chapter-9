import React from 'react';
import { Button, Container, Row, Card, CardBody, CardTitle, CardSubtitle, CardText, Form, FormGroup, Label, Input} from 'reactstrap';
import './App.css';


function App() {
  return (
    <Container className='flex'>
      <Row className='login-container align-items-center'>
       <Card>
        <CardBody>
        <CardTitle tag="h5">
        Login
        </CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
        Please insert your email and password to login
        </CardSubtitle>
        <CardText>
          <Form>
            <FormGroup>
              <Label>Email</Label>
              <Input id="email" placeholder="input by email" type="email"/>
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input id="password" placeholder="password" type="password"/>
            </FormGroup>
            <p>
             Register <a href="/register">here</a> for new account
            </p>
            <Button>
              Login
            </Button>
          </Form>
        </CardText>
        
        </CardBody>
        </Card>
      </Row>
    </Container>
  );
}

export default App;
