import student from '../models/student.js';

export const addStd=async(req,res)=>{
    try{
        const {enroll,name,email,contact,course}=req.body;
        const newStd=await student.create({
            enroll,
            name,
            email,
            contact,
            course
        })
        return res.json({message:"Student added."});
    }
    catch{
        return res.json({message:"error in Student Adding"})
    }
}

export const getStd=async(req,res)=>{
    try{
        const allStd=await student.find();
        return res.json({message:"Student Data Fetched",allStd})
    }
    catch{
        return res.json({message:"Error in Get Student"})
    }
}

export const deleteStd=async(req,res)=>{
    try{
        const {id}=req.params;
        await student.findByIdAndDelete(id);
        return res.json({message:"Student Deleted"})
    }
     catch{
        return res.json({message:"Error in Delete Student"})
    }
}

export const getSWI=async(req,res)=>{
    try{
        const {id}=req.params;

        const rStd=await student.findById(id);
        return res.json({message:"Student Found",rStd})
    }
    catch{
        return res.json({message:"Error in Getting Data"})
    }
}

export const updStd=async(req,res)=>{
    try{
        const {id}=req.params;
        const {enroll,name,email,contact,course}=req.body;

        const newStudent=await student.findByIdAndUpdate(id,
            {
            enroll,
            name,
            email,
            contact,
            course
            }
            
        )
        return res.json({message:"Data Updated",newStudent})
    }
    catch{
        return res.json({message:"Error in Update"})
    }
}