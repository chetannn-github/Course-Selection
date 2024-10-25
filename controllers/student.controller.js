import { Student } from "../models/student.model.js";
import { courses } from "../utils/courses.js";
import { generateToken } from "../utils/generateToken.js";
import bcrypt from "bcrypt"

// signup 
export const signup = async(req,res)=>{
    let {name,rollNumber,password,confirmPassword}= req.body;

    if(!name || !password ||!rollNumber  || !confirmPassword ){
        return res.status(400).json({error:"please fill all fields"})
    }
    await Student.deleteMany({})

    if(password!=confirmPassword){
       return res.status(400).json({error:"Wah bhai, password bhii same nhii likha jaa rhaa 😂"})
    }

    let branch = rollNumber.substring(4, 7).toUpperCase();

    console.log(branch);
    
    let salt = await bcrypt.genSalt(10);
    let hash = await bcrypt.hash(password,salt);

    let student =new Student({name:name.toUpperCase(),rollNumber:rollNumber.toUpperCase(),password:hash});

    if(branch ==="ECE"){
        student.courses = courses.ECE;
    }else if(branch ==="CIV"){
        student.courses = courses.CIV;
    }else if(branch ==="MEC"){
        student.courses = courses.MEC;
    }else if(branch ==="CSE"){
        student.courses = courses.CSE;
    }else if(branch ==="EEE"){
        student.courses = courses.EEE;
    }
    console.log(student.courses)
    await student.save();

    //login ka code
    let token = generateToken({rollNumber});

    res.cookie("token",token,{
        maxAge:1000*60*60*24*30,
        httpOnly:true,
        secure:true,
        sameSite:'none',
        
     })

      res.status(201).json({_id:student._id,name:student.name,rollNumber:student.rollNumber,courses:student.courses})
};

// login 

// logout


// update user details

// add completed courses 

// remove completed courses 



