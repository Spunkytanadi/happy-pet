import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "./login.css";
import Header from "./header";
import Footer from "./footer";
import propTypes from "prop-types";
import useToken from "./auth/useToken"

async function loginUser(credentials) {
  return fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(crendetials)
})
    .then(data => data.json())
}

function setToken(userToken) {
  localStorage.setTime('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = localStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  return (
    <div className="login-wrapper">
      <h1>Please Log in</h1>
      <Header />
        <Form onSubmit={handleSubmit}>
          <label>
            <p>username</p>
            <input type="text" oncChange={e => setUserName(e.target.value)} />
          </label>
          <label>
            <p>Password</p>
            <input type="passwor" onChange={e => setPassword(e.target.value)} />
          </label>
          <div>
            <button type="submit">Submit</button>
          </div>

      </Form>
      <Footer />
    </div>
  );
}

Login.propTypes = {
  setToken: propTypes.func.isRequired
}
