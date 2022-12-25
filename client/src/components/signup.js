import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./signup.css"
import Header from "./header";

export default function Signup() {
    //State for Registration
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    //navigate my page
    const navigate = useNavigate();

    const collectData = async () => {
        console.log(username, email, password);
        let result = await fetch("http://localhost:3000/signup", {
            method: "post",
            body: JSON.stringify({ username, email, password }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        result = await result.json();
        console.log("Here is the result", result);
        localStorage.setItem("user", JSON.stringify(result));
        navigate("/home");
    };

    // Handling the first change
    const handleUsername = (e) => {
        setUsername(e.target.value);
    };

    // Handling the email change
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    // Handling the password change
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    return (
        <div className="mb-1">
          <Header />
            <Container className="mb-2">
                    <h1>Signup</h1>
                    <Card.Body>
                        <Form>
                            <Form.Control
                                type="text"
                                placeholder="User Name"
                                id="usernam"
                                name="username"
                                value={username}
                                onChange={handleUsername}
                            />
                            <br />
                            <Form.Control
                                type="text"
                                placeholder="name@example.com"
                                id="email"
                                name="email"
                                value={email}
                                onChange={handleEmail}
                            />
                            <br />
                            <Form.Control
                                type="text"
                                placeholder="create password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={handlePassword}
                            />
                            <br />
                            <Button variant="secondary" type="button" onClick={collectData}>
                                Create Account
                            </Button>
                            <span><Link to="/login"></Link></span>
                        </Form>
                    </Card.Body>
                      <p className="mt-2">
                        Don't have account? <Link to="/Login">Login</Link>
                      </p>
            </Container>
        </div>  
  );
}
