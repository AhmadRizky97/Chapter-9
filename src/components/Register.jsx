import { Button, Row, Card, CardBody, CardTitle, CardSubtitle, CardText, Form, FormGroup, Label, Input} from 'reactstrap';

function Register () {

  return (

  
    <Row className='login-container align-items-center'>
       <Card>
        <CardBody>
        <CardTitle tag="h5">
        Register
        </CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
        Register your new account
        </CardSubtitle>
        <CardText>
          <Form>
          <FormGroup>
              <Label>Name</Label>
              <Input id="name" placeholder="please input your name" type="text"/>
            </FormGroup>
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
              Register
            </Button>
          </Form>
        </CardText>
        
        </CardBody>
        </Card>
      </Row>
  )
}


export default Register