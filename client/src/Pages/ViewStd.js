
import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import '../index.css';
import { Link} from 'react-router-dom';
import axios from 'axios';

const ViewStd = () => {
    
    const [std,setStd]=useState([]);
     const getData=async()=>{
            try{
                const response=await axios.get("https://studentmanagementsystem-pooo.onrender.com/api/std/get");
                setStd(response.data.allStd);
            }
        catch (error) {
            alert(error.response?.data?.message);
        }
        }
     
    useEffect(()=>{
         getData();
    },[])
    const deleteStudent=async(id)=>{
        try{
            const response=await axios.delete(`https://studentmanagementsystem-pooo.onrender.com/api/std/del/${id}`)
            alert(response.data.message)
            getData();
            
            
        }  
        catch (error) {
            alert(error.response?.data?.message);
        } 

        
    }
  return (
    <div className="view-student-page">
      <Navbar />

      <div className="student-table-container">
        <div className="student-table-header">
          <div>
            <h2>View Students</h2>
            <p>Manage and view all registered students</p>
          </div>
        </div>

        <div className="student-table-wrapper">
          <table className="student-table">
            <thead>
              <tr>
                <th>Enrollment</th>
                <th>Name</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Course</th>
                <th colSpan={2}>Action</th>
              </tr>
            </thead>

            <tbody>
                {std.map((student)=>(
                    <>
                        <tr>
                            <td>{student.enroll}</td>
                            <td>{student.name}</td>
                            <td>{student.email}</td>
                            <td>{student.contact}</td>
                            <td>{student.course}</td>
                            <td>
                                <Link to={`/edit/${student._id}`}>Edit</Link>
                            </td>
                            <td>
                                
                                {/* <button type='button' onClick={()=>deleteStudent(student._id)}>Delete</button> */}
                                <button type="button" className="delete-btn" onClick={() => deleteStudent(student._id)}>  Delete</button>
                            </td>
                        </tr>
                    </>
                ))}
              {/* <tr>
                <td>101</td>
                <td>Rahul Patel</td>
                <td>rahul@example.com</td>
                <td>9876543210</td>
                <td>MCA</td>
                <td>
                    <Link>Edit</Link>
                </td>
                <td>
                    <Link>Delete</Link>
                </td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewStd;
