import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Jumbotron from "./jumbotron";
import Footer from "./footer";
import Profile from "./profile";

export default function Login () {
	const navigate = useNavigate ()
	const [username, setusername] = useState("");
	const [password, setpassword] = useState("");
	const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));
	const users = [{ username: "Jane", password: "testpassword" }];
	const handleSubmit = (e) => {
	e.preventDefault()
	const account = users.find((user) => user.username === username);
	if (account && account.password === password) {
		setauthenticated(true)
		localStorage.setItem("authenticated", true);
	}
	};
	return (
	<div style={{ textAlign: 'center' }}>
		<p>Welcome Back</p>
			<form onSubmit={handleSubmit}>
				<input
				type="text"
				name="Username"
				value={username}
				onChange={(e) => setusername(e.target.value)}
			/>
			<input
				type="password"
				name="Password"
				onChange={(e) => setpassword(e.target.value)}
			/>
				<input type="submit" value="Submit" />
			</form>
		<Jumbotron />
		<Footer />
	</div>
	)
};