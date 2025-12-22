import e from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import User from "./Model/users.js"
import cors from "cors"
dotenv.config()


const app =e();
app.use(e.json());
app.use(cors());

const PORT =3000;
 const Database_conection= async()=>
 {
    const connect = await mongoose.connect(process.env.MongoDB);
  try {
    if (connect) {
      console.log("Database connected successfully");
    }   
    } catch (error) {
      console.log("Database connection failed", error)
    };
 }
Database_conection();

 app.post('/signup',async (req,res)=>{
    const {name,email,password}=req.body;
    const newUser=new User({
        name,
        email,
        password
    });
    try{
   await newUser.save()
    }
    catch(err)
    {
     res.json({
        status:err
     })
    }
   


 });

 app.post('/login',async(req,res)=>{
    const {email,password}=req.body;
    const user=await User.findOne({email,password});
    if(user){
        res.json({
            status:"ok",
            message:"login successful"
        })
    }else{
        res.json({
            status:"error",
            message:"Invalid email or password"
        })
    }
});

app.listen(PORT,()=>{
    console.log(`your server is running on port ${PORT}`)
});