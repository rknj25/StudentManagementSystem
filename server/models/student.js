import mongoose from "mongoose";

const stdSchema=mongoose.Schema({
    enroll:{type:String,required:true},
    name:{type:String,required:true},
    email:{type:String,required:true},
    contact:{type:String,required:true},
    course:{type:String,required:true}
})

const student=mongoose.model("student",stdSchema);

export default student;