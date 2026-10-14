import user from '../models/user.js';
import bcrypt from 'bcrypt';

export const register=async(req,res)=>{
    try{
        const {name,email,password}=req.body;
        const extUser=await user.findOne({email});
        if(extUser){
            return res.json({message:"Email already used"})
        }
        const hasspass=await bcrypt.hash(password,10);
        const newUser=await user.create({
            name,
            email,
            password:hasspass
        })
        return res.json({message:"Registration Successfully",newUser})
    }
    catch{
        return res.json({message:"Error in Registration"})
    }
}

export const login=async(req,res)=>{
    try{
        const {email,password}=req.body;
        const extEmail=await user.findOne({email})
        if(!extEmail){
            return res.json({message:"Email not Registered"})
        }
        const matchPass=await bcrypt.compare(password,extEmail.password);
        if(!matchPass){
            return res.json({message:"Password not Matched"});
        }
        return res.json({message:"Login Successfully",extEmail});

    }
    catch{
        return res.json({message:"Error in Login"})
    }
}