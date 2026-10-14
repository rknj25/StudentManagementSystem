
import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import '../index.css';
import axios from 'axios';

const AddStd = () => {
    const [form,setForm]=useState({
        enroll:"",
        name:"",
        email:"",
        contact:"",
        course:""
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
            const response=await axios.post("http://localhost:9999/api/std/add",form)
            alert(response.data.message);
            setForm({
        enroll:"",
        name:"",
        email:"",
        contact:"",
        course:""
    })

        }
        catch (error) {
            alert(error.response?.data?.message);
        }
    }
  return (
    <div className="add-student-page">
      <Navbar />

      <div className="student-form-container">
        <form className="student-form" onSubmit={handleSubmit}>
          <h2>Add New Student</h2>
          <p>Enter the student details below</p>

        <div className="form-group">
            <label>Enrollment Number</label>
            <input type="number" name='enroll' value={form.enroll} onChange={handleChange} placeholder="Enter semester" min="1" required />
          </div>

          <div className="form-group">
            <label>Full Name</label>
            <input type="text" name='name' value={form.name} onChange={handleChange} placeholder="Enter full name" required />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input type="email" name='email' value={form.email} onChange={handleChange} placeholder="Enter email address" required />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" name='contact' value={form.contact} onChange={handleChange} placeholder="Enter phone number" required />
          </div>

          <div className="form-group">
            <label>Course</label>
            <input type="text" name='course' value={form.course} onChange={handleChange} placeholder="Enter course name" required />
          </div>



          <button type="submit" className="add-student-btn">
            Add Student
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddStd;
