import { Button, Row, Card, CardBody, CardTitle, CardSubtitle,Form, FormGroup, Label, Input, Alert} from 'reactstrap';
import {Link, useNavigate} from 'react-router-dom'
import {registerWithEmailAndPassword} from '../firebase'
import {useState} from 'react';


 function Register () {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [success, setSuccess] = useState (false);
  // const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();


  async function register (e) {
    e.preventDefault()
    if (!name) alert("Please enter name");
    await registerWithEmailAndPassword(name, email, password);
  setSuccess (true)
  setTimeout (() => {
    navigate('/login')
    // setSuccess (false)
  }, 2000)
};
  
// useEffect(() => {
  //   if (loading) return;
  //   if (user) history.replace("/dashboard");
  // }, [user, loading]);


  return (
    <>
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
              <Input id="name" onChange={e => setName (e.target.value)} placeholder="please input your name" type="text"/>
            </FormGroup>
            <FormGroup>
              <Label>Email</Label>
              <Input id="email" onChange={e => setEmail (e.target.value)} value={email} placeholder="input by email" type="email"/>
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input id="password" onChange={e => setPassword (e.target.value)} value={password} placeholder="password" type="password"/>
            </FormGroup>
            <p>
             Login <Link to="/login">here</Link> if already had account
            </p>
            <>
            <Alert 
            hidden={!success}
            color="primary">
             Success Register, please login on login page !
            </Alert>
            </>
            <Button onClick={e => register(e)}>
              Register
            </Button>
          </Form>
        </CardBody>
        </Card>
      </Row>
      </>
  )
 }

export default Register