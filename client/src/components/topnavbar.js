import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

export default function Topnavbar() {
  return (
    <div>
        <Container>
            <Navbar>
            <Nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <img src="../logo.png" width="50px" height="50px" class="d-inline-block align-top" alt="" />
                <Nav className="me-auto">
                    <Nav.Link href="Home">Home</Nav.Link>
                    <Nav.Link href="Post">Post</Nav.Link>
                </Nav>
                <Button variant="secondary" size='lg' active>
                    Login
                </Button>{' '}
                <Button variant="secondary" size="lg" active>
                    Signup
                </Button>
            </Nav>
        </Navbar>
        </Container>
    </div>  
   );
}
