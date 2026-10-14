import React, { useState } from 'react';
import axios from 'axios';
import '../index.css'
import {Link, useNavigate} from 'react-router-dom';

const Register = () => {
    const navigate=useNavigate()
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                "https://studentmanagementsystem-pooo.onrender.com/api/auth/reg",
                form
            );

            alert(response.data.message);

            setForm({
                name: "",
                email: "",
                password: ""
            });
            navigate('/');
        } catch (error) {
            alert(
                error.response?.data?.message ||
                "Registration failed. Please try again."
            );
        }
    };

    return (
        <div className="register-container">
            <form className="register-form" onSubmit={handleSubmit}>
                <h2>Create Account</h2>
                <p>Register to get started</p>

                <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                />

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
                    minLength={6}
                />

                <button type="submit">Register Now</button>
                <Link to="/" className="login-link">
    Already have an account? Login
</Link>
            </form>
        </div>
    );
};

export default Register;