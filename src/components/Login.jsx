import { Button, Row, Card, CardBody, CardTitle, CardSubtitle, Form, FormGroup, Label, Input} from 'reactstrap';
import {Link} from 'react-router-dom'

function Login () {

  return (

  
    <Row className='login-container align-items-center'>
       <Card>
        <CardBody>
        <CardTitle tag="h5">
        Login
        </CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
        Please insert your email and password to login
        </CardSubtitle>
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
             Register <Link to="/register">here</Link> for new account
            </p>
            <Button>
              Login
            </Button>
          </Form>        
        </CardBody>
        </Card>
      </Row>
  )
}


export default Login