import {useState} from 'react';
import Footer from './footer'
import Topnavbar from './topnavbar';
  
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
      <Topnavbar />
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
 
        <button onClick={handleSubmit} className="btn" type="submit">submit</button>
        </form>
      <Footer />  
    </div>
  );
};