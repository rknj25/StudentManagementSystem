import React, { useState } from 'react';
import '../index.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const navigate=useNavigate();
    const [form,setForm]=useState({
        email:"",
        password:""
    })
    const handleChange=(e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const response=await axios.post("https://studentmanagementsystem-pooo.onrender.com/api/auth/log",form)
            localStorage.setItem("user",JSON.stringify(response.data.extEmail))
            alert(response.data.message)
                navigate('/dashboard')    

        }
        catch (error) {
            alert(
                error.response?.data?.message ||
                "Registration failed. Please try again."
            );
        }
    }
  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Welcome Back</h2>
        <p>Login to your account</p>

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Login</button>

        <p className="register-text">
          Don't have an account? <Link to={'/register'}>Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;