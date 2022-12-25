import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./login.css";
import Header from "./header";

export default function Login () {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    console.log("username,password", username, password);
    let result = await fetch("http://localhost:3000/login", {
      method: 'post',
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    if (result.username) {
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/profile");
    } else {
      alert("Your database do not exist!");
    }
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="mb-1">
      <Header />
      <Container className="mb-3">
          <h3>Login</h3>
          <Card.Body>
            <Form>
              <Form.Control
                type="text"
                placeholder="username"
                id="username"
                name="username"
                value={username}
                onChange={handleUsername}
              />
              <br />
              <Form.Control
                type="text"
                placeholder="password"
                id="password"
                name="password"
                value={password}
                onChange={handlePassword}
              />
              <br />
              <Button variant="secondary" onClick={handleLogin}>
                {""}
                LOG IN
              </Button>
            </Form>
          </Card.Body>
            <p className="mt-2">
              Don't have account? <Link to="/signup">Signup</Link>
            </p>
          
      </Container>
    </div>
  );
}