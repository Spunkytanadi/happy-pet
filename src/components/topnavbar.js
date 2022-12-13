import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button"
import Nav from "react-bootstrap/nav";
import Container from "react-bootstrap/Container";

export default function Topnavbar () {
    return (
        <>
        <div class="header" />
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="/happy.png"
              width="500"
              height="500"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#About">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}