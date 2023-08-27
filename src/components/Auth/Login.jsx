import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { login } from "../../redux/actions/user";
import "./login.scss";



const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const submitHandler = e => {
        e.preventDefault();
        dispatch(login(email, password));
    };


    return (
        <div className="login">
            <div className="cards">
                <div className="left">
                    <h1 style={{ fontSize: "24px" }}>SabziSaga</h1>
                    <p>
                        "Your Gateway to Fresh Greens: An Easy Guide to Sabzi Website's Login Page"
                    </p>
                    <span>Don't you have an account?</span>
                    <Link to="/register">
                        <button>Register</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form onSubmit={submitHandler}>
                        <input
                            type="email"
                            placeholder="abc@gmail.com"
                            name="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />

                        <button type="submit">Login</button>
                    </form>
                    <span>Forgot password <Link to="/forgotpassword">click here</Link></span>
                </div>
            </div>
        </div>
    );
};

export default Login;
