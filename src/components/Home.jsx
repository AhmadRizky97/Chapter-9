import {Row, Card, CardBody, CardTitle} from 'reactstrap';
import {Link} from 'react-router-dom'

function Home () {

  return (

  
    <Row className='login-container align-items-center'>
       <Card>
        <CardBody>
        <CardTitle tag="h5">
          Home
        </CardTitle>
        <Link to="/login">Login</Link>
        <br></br>
        <Link to="/register">Register</Link>
        </CardBody>
       </Card>
      </Row>
  )
}


export default Home