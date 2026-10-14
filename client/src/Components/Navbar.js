import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../index.css';

const Navbar = () => {
    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem('user') || 'null');

    const logout = () => {
        localStorage.removeItem('user');
        navigate('/');
    };

    return (
        <nav className="custom-navbar">
            <div className="navbar-container">

                <Link className="navbar-brand" to="/dashboard">
                    Student Management
                </Link>

                <div className="navbar-menu">
                    <Link to="/dashboard" className="nav-link">
                        Dashboard
                    </Link>

                    <Link to="/addstudent" className="nav-link">
                        Add Student
                    </Link>

                    <Link to="/viewStudent" className="nav-link">
                        View Students
                    </Link>

                    <span className="navbar-welcome">
                        Welcome, <strong>{user?.name || 'Admin'}</strong>
                    </span>

                    <button
                        type="button"
                        className="navbar-logout"
                        onClick={logout}
                    >
                        Logout
                    </button>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;