import React from 'react';
import './LoginForm.css';
import { Link } from 'react-router-dom';
import { FaUser, FaLock } from "react-icons/fa";

const RegisterForm = () => {
  return (
    <div className='login-main'>
        
      <div className='wrapper'>
            <form action="">
                <h1>Register</h1>
                <div className="input-box">
                    <input type="text" placeholder='Username' required />
                    <FaUser className='icon' />
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Password' required />
                    <FaLock className='icon' />
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Confirm Password' required />
                    <FaLock className='icon' />
                </div>

                <button type="submit">Register</button>

                <div className="register-link">
                    <p>Already have an account? <Link to="/login">Login</Link></p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default RegisterForm;

