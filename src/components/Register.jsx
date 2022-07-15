import { Button, Row, Card, CardBody, CardTitle, CardSubtitle,Form, FormGroup, Label, Input} from 'reactstrap';
import {Link} from 'react-router-dom'

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
             Login <Link to="/">here</Link> if already had account
            </p>
            <Button>
              Register
            </Button>
          </Form>
        </CardBody>
        </Card>
      </Row>
  )
}


export default Register