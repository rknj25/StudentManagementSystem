
import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import axios from 'axios';
import '../index.css';

const Dashboard = () => {
  const [student, setStudent] = useState([]);
  const [search, setSearch] = useState('');

  // Fetch all students
  const getStudent = async () => {
    try {
      const response = await axios.get(
        'https://studentmanagementsystem-pooo.onrender.com/api/std/get'
      );

      setStudent(response.data.allStd);
    } catch (error) {
      console.log('Error fetching students:', error);
    }
  };

  useEffect(() => {
    getStudent();
  }, []);

  // Search students by enrollment, name, email, contact, or course
  const filteredStudents = student.filter((s) => {
    const searchText = search.trim().toLowerCase();

    return (
      s.enroll?.toString().toLowerCase().includes(searchText) ||
      s.name?.toLowerCase().includes(searchText) ||
      s.email?.toLowerCase().includes(searchText) ||
      s.contact?.toString().toLowerCase().includes(searchText) ||
      s.course?.toLowerCase().includes(searchText)
    );
  });

  return (
    <div className="dashboard-page">
      <Navbar />

      <h1>Student Dashboard</h1>

      {/* Search Section */}
      <div className="search-section">
        <input
          type="search"
          placeholder="Search by name, enrollment, email, course..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button onClick={() => setSearch(search.trim())}>
          Search Student
        </button>
      </div>

      {/* Search Result Count */}
      <p className="student-count">
        {search.trim()
          ? `${filteredStudents.length} student(s) found`
          : `Total Students: ${student.length}`}
      </p>

      {/* Student Cards */}
      <div className="parent">
        {filteredStudents.length > 0 ? (
          filteredStudents.map((s) => (
            <div className="child" key={s._id}>
              <h3>{s.enroll}</h3>
              <h3>{s.name}</h3>
              <h4>{s.email}</h4>
              <h5>{s.contact}</h5>
              <h5>{s.course}</h5>
            </div>
          ))
        ) : (
          <div className="no-students">
            <h3>No Students Found</h3>
            <p>Try searching with a different name or keyword.</p>

            <button onClick={() => setSearch('')}>
              Clear Search
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
