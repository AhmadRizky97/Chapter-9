import { useEffect, useState } from 'react';
import { Button, Row, Card, CardBody, CardTitle, CardSubtitle, Form, FormGroup, Label, Input} from 'reactstrap';
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth, logInWithEmailAndPassword, signInWithGoogle} from '../firebase'
import {Link, useNavigate } from 'react-router-dom'


function Login () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  async function login () {
    await logInWithEmailAndPassword(email,password);
  }

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/dashboard");
  }, [user, loading]);

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
              <Input id="email" onChange ={e => setEmail(e.target.value)} value={email} placeholder="input by email" type="email"/>
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input id="password" onChange ={e => setPassword(e.target.value)} value={password}placeholder="password" type="password"/>
            </FormGroup>
            <FormGroup>
              <Button onClick={signInWithGoogle}>
                Sign In With Google
              </Button>
            </FormGroup>
            <p>
             Register <Link to="/register">here</Link> for new account
            </p>
            <Button onClick={() => login()}>
              Login
            </Button>
          </Form>        
        </CardBody>
        </Card>
      </Row>
  )
}


export default Login