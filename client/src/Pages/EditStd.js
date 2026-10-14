
// import React, { useEffect, useState } from 'react';
// import Navbar from '../Components/Navbar';
// import '../index.css';
// import axios from 'axios';
// import { useNavigate, useParams } from 'react-router-dom';

// const EditStd = () => {
//     const navigate=useNavigate();
//     const [std,setStd]=useState({});
//     const {id}=useParams();
//     const getStudent=async(req,res)=>{
//         try{
//             const response=await axios.get(`https://studentmanagementsystem-pooo.onrender.com/api/std/fnd/${id}`)
//             setStd(response.data.rStd)
//         }
//         catch{

//         }
//     }
//     useEffect(()=>{
//         getStudent();
//     },[id])
//     const handleChange=(e)=>{
//         setStd({...std,
//             [e.target.name]:e.target.value}
//         )
//     }
//     const handleSubmit=async(e)=>{
//         e.preventDefault();
//         try{
//             const response=await axios.put(`https://studentmanagementsystem-pooo.onrender.com/api/std/upd/${id}`,
//                 std
//             )
//             alert(response.data.message)
//             navigate('/viewstudent')
//         }
//         catch(error){
//             alert(error.response?.data?.message)
//         }
//     }
//   return (
//     <div className="edit-student-page-wrapper">
//       <Navbar />

//       <div className="edit-student-page">
//         <div className="edit-student-card">

//           <div className="form-header">
//             <div className="form-icon">✎</div>
//             <h2>Edit Student Details</h2>
//             <p>Update the information for this student</p>
//           </div>

//           <form className="edit-student-form" onSubmit={handleSubmit}>

//             <div className="form-group">
//               <label htmlFor="enroll">Enrollment Number</label>
//               <input
//                 type="number"
//                 id="enroll"
//                 name="enroll"
//                 value={std.enroll}
//                 placeholder="Enter enrollment number"
//                 onChange={handleChange}
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="name">Full Name</label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={std.name}
//                 placeholder="Enter full name"
//                 onChange={handleChange}
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="email">Email Address</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={std.email}
//                 placeholder="Enter email address"
//                 onChange={handleChange}
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="contact">Phone Number</label>
//               <input
//                 type="tel"
//                 id="contact"
//                 name="contact"
//                 value={std.contact}
//                 placeholder="Enter phone number"
//                 onChange={handleChange}
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="course">Course</label>
//               <input
//                 type="text"
//                 id="course"
//                 name="course"
//                 value={std.course}
//                 placeholder="Enter course name"
//                 onChange={handleChange}
//               />
//             </div>

//             <div className="form-actions">
//               <button type="submit" className="update-btn">
//                 Update Student
//               </button>

//               <button type="button" className="cancel-btn">
//                 Cancel
//               </button>
//             </div>

//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EditStd;
import React, { useCallback, useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import '../index.css';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditStd = () => {
  const navigate = useNavigate();
  const [std, setStd] = useState({});
  const { id } = useParams();

  const getStudent = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://studentmanagementsystem-pooo.onrender.com/api/std/fnd/${id}`
      );
      setStd(response.data.rStd);
    } catch (error) {
      alert(error.response?.data?.message || 'Error fetching student details');
    }
  }, [id]);

  useEffect(() => {
    getStudent();
  }, [getStudent]);

  const handleChange = (e) => {
    setStd({
      ...std,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `https://studentmanagementsystem-pooo.onrender.com/api/std/upd/${id}`,
        std
      );

      alert(response.data.message);
      navigate('/viewstudent');
    } catch (error) {
      alert(error.response?.data?.message || 'Error updating student');
    }
  };

  return (
    <div className="edit-student-page-wrapper">
      <Navbar />

      <div className="edit-student-page">
        <div className="edit-student-card">
          <div className="form-header">
            <div className="form-icon">✎</div>
            <h2>Edit Student Details</h2>
            <p>Update the information for this student</p>
          </div>

          <form className="edit-student-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="enroll">Enrollment Number</label>
              <input
                type="number"
                id="enroll"
                name="enroll"
                value={std.enroll ?? ''}
                placeholder="Enter enrollment number"
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={std.name ?? ''}
                placeholder="Enter full name"
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={std.email ?? ''}
                placeholder="Enter email address"
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact">Phone Number</label>
              <input
                type="tel"
                id="contact"
                name="contact"
                value={std.contact ?? ''}
                placeholder="Enter phone number"
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="course">Course</label>
              <input
                type="text"
                id="course"
                name="course"
                value={std.course ?? ''}
                placeholder="Enter course name"
                onChange={handleChange}
              />
            </div>

            <div className="form-actions">
              <button type="submit" className="update-btn">
                Update Student
              </button>

              <button
                type="button"
                className="cancel-btn"
                onClick={() => navigate('/viewstudent')}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditStd;