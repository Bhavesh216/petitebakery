import React from 'react';
import './LoginForm.css';
import { Link } from 'react-router-dom';
import { FaUser, FaLock } from "react-icons/fa";

const LoginForm = () => {
    return (
        <div className='login-main'>
        <div className='wrapper'>
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder='Username' required />
                    <FaUser className='icon' />
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Password' required />
                    <FaLock className='icon' />
                </div>

                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember me</label>
                    <a href="#">Forgot password?</a>
                </div>

                <button type="submit" ><Link to="/" className='link'>Login</Link></button>

                <div className="register-link">
                    <p>Don't have an account? <Link to="/register">Register</Link></p>
                </div>
            </form>
        </div>
        </div>
    );
};

export default LoginForm;