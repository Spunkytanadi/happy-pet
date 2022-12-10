import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

export default function Topnavbar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
            <img src="../logo.png" alt="" />
            <Navbar.Brand href="#home">Pet Sosmed</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="Post">Post</Nav.Link>
            </Nav>
            <Button variant="secondary" size='lg' active>
                Login
            </Button>{' '}
            <Button variant="secondary" size="lg" active>
                Signup
            </Button>
        </Container>
      </Navbar>
    </div>  
   );
}
