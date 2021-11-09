import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import "./login.css"
import axios from 'axios'
import { userContext } from '../../App'


export default function Login() {
    const user = useContext(userContext)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    let history = useHistory();
    
    const CheckLogin = (e) => {
        e.preventDefault()
        axios.post('https://stormy-ridge-27884.herokuapp.com/login', {
            username: username,
            password: password
        }).then(res => {
            if (res.data.user) {
                user.setUser(res.data.user)
                localStorage.setItem('token', JSON.stringify(res.data.token))
                console.log(user.user)
                history.push("/dashboard");
            }
        })
    }
    return (
        <div>
            <div className="wrapper">
	<div className="container">
		<h1>Welcome</h1>
		
		<form className="form">
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
			<button
                            type="submit"
                            id="login-button"
                            onClick={(e) => CheckLogin(e)}>
                    Login
            </button>
		</form>
	</div>
	
        <ul className="bg-bubbles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
    </div>
    )
}
