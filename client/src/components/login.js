import { useState } from 'react';
import './login.css'
import Footer from './footer';
import Jumbotron from './jumbotron';
import { Navigate, useNavigate } from 'react-router-dom';

export default function Login () {
const navigate = useNavigate();
const [ username, setusername ] = useState(''); 
const [ email, setEmail ] = useState('');
const [ password, setPassword ] = useState('');
const [ isLoggedin, setIsLoggedin ] = useState(false);

const login = (e) => {
	e.preventDefault();
	console.log(email, password);
	const userData = {
	email,
	password,
	};
	localStorage.setItem('token-info', JSON.stringify(userData));
	setIsLoggedin(true);
	setEmail('');
	setPassword('');
};

const users = [{ email: "Jane", password: "testpassword" }];
const handleSubmit = (e) => {
	e.preventDefault();
	const account = users.find((user) => user.username === username);
	if (account && account.password === password) {
		localStorage.setItem("authenticated", true);
		navigate("/dashboard");
	}
};

const logout = () => {
	localStorage.removeItem('token-info');
	Navigate("/");
};

return (
	<>
	<div style={{ textAlign: 'center' }}>
		<h1>Welcome Back</h1>
		{!isLoggedin ? (
		<>
			<form onSubmit={handleSubmit}>
			<input
				type="text"
 				name="Username"
 				value={username}
 				onChange={(e) => setusername(e.target.value)}
 			/>
			<input
				type="email"
				onChange={(e) => setEmail(e.target.value)}
				value={email}
				placeholder="Email"
			/>
			<input
				type="password"
				onChange={(e) => setPassword(e.target.value)}
				value={password}
				placeholder="Password"
			/>
			<button type="submit" onClick={login}>
				submit
			</button>
			</form>
		</>
		) : (
		<>
			<h1>User is logged in</h1>
			<button onClickCapture={logout}>logout user</button>
		</>
		)}
	<Jumbotron />
	<Footer />
	</div>
	</>
);
}