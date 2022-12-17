import {useState} from 'react';
import Footer from './footer'
import Header from './header';
import propTypes from "prop-types";
import useToken from "./auth/useToken"
  
async function signUp(credentials) {
  return fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ user:this.state })
})
    .then(data => data.json())
}


export default function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    function handleName (e) {
        setName(e.target.value);
        setSubmitted(false);
    };

    function handleEmail (e) {
        setEmail(e.target.value);
        setSubmitted(false);
    };

    function handlePassword (e) {
        setPassword(e.target.value);
        setSubmitted(false);
    };

    function handleSubmit (e) {
        e.preventDefault();
        if (name === '' || email === '' || password === '') {
            setError(true);
        } else {
            setSubmitted(true);
            setError(false);
        }
    };

    function successMessage () {
        return (
            <div className="success" style={{display: submitted ? '' : 'none',}}>
                <h1>User {name} successfully registered!</h1>
            </div>
        );
    };

    function errorMessage () {
        return (
          <div
            className="error"
            style={{
              display: error ? '' : 'none',
            }}>
            <h1>Please enter all the fields</h1>
          </div>
        );
      };

  return (
    <div className="form">
      <Header />
        <div>
            <h1>User Registration</h1>
        </div>

        {/* Calling to the methods */}
        <div className='messages'>
            {errorMessage()}
            {successMessage()}
        </div>
      
        <form>
        {/* Labels and inputs for form data */}
        <label className="label">Name</label>
        <input onChange={handleName} className="input"
          value={name} type="text" />
 
        <label className="label">Email</label>
        <input onChange={handleEmail} className="input"
          value={email} type="email" />
 
        <label className="label">Password</label>
        <input onChange={handlePassword} className="input"
          value={password} type="password" />
 
        <button onClick={handleSubmit} className="btn btn-dark" type="submit">submit</button>
        </form>
      <Footer />  
    </div>
  );
};

Signup.propTypes = {
  setToken: propTypes.func.isRequired
}