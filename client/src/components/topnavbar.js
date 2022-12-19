import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/nav";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function Topnavbar () {
  const navigate = useNavigate();

    return (
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="/happypet.png"
              width="50"
              height="50"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Nav className="me-auto" style={{ textAlign: 'right' }}>
            <Nav.Link href="About">About</Nav.Link>
          </Nav>
            <Button
              variant="secondary"
              className="spacing"
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
            <Button 
              variant="secondary" 
              onClick={() => navigate("/signup")}
            >
                Signup
            </Button>
        </Container>
      </Navbar>
  );
}