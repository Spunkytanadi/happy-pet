import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/nav";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function Topnavbar () {
  const navigate = useNavigate();

    return (
      <div class="container-fluid">
        <Navbar bg="dark" variant="dark" width="100%">
          <Nav.Link href="/" className="logo">
            <img src="/happypet.png" alt="logo" width="50px" height="50px" />
          </Nav.Link>
          <Nav>
            <Button
              variant="secondary"
              onClick={() => navigate("/about")}>
                About
            </Button>
            <Button
              variant="secondary"
              className="spacing"
              onClick={() => navigate("/login")}>
                Login
            </Button>
            <Button 
              variant="secondary" 
              onClick={() => navigate("/signup")}>
                Signup
            </Button>
          </Nav>
        </Navbar>
      </div>  
  );
}