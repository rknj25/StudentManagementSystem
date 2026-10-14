import React from 'react'
import {Route,Routes} from "react-router-dom";
import Login from './Pages/Login';
import Register from './Pages/Register';
import Dashboard from './Pages//Dashboard';
import AddStd from './Pages/AddStd';
import ViewStd from './Pages/ViewStd';
import EditStd from './Pages/EditStd';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/addStudent' element={<AddStd/>}/>
        <Route path='/viewStudent' element={<ViewStd/>}/>
        <Route path='/edit/:id' element={<EditStd/>}/>
      </Routes>
    </div>
  )
}

export default App
