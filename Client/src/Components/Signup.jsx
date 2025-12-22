import React, { useEffect } from 'react'
import axios from 'axios'



function Signup() {
    const [Name,setname]=React.useState('');
      const [Email,setemail]=React.useState('');
        const [Password,setpassword]=React.useState('');

// const axios = require('axios');

  const apicall = async()=>{
    const connect = await axios.post("http://localhost:3000/signup",{
      name:Name,
      email:Email,
      password:Password
    })
   console.log()  
  try{
    if(code ==11000){

alert("user alredy exist")
    }
    else{
      alert("user created")
    
    }

  }
  catch(err){
    alert(err)

  }
  }
 

// useEffect(,[])

  return (
   <>
  <div className='h-screen w-screen flex justify-center items-center'>
   <div className='h-fit w-[40vw] bg-red-300 rounded-lg shadow-lg'>
    <h1 className='text-2xl font-bold text-center pt-4 text-black'>Signup</h1>
    <form className='flex flex-col items-center space-y-4 mt-5'>
        <label htmlFor="username" className=' text-black' > Enter Your  Name</label>
        <input type="text" id='username' placeholder='Username' className='border-2 p-2 w-3/4 text-black' value={Name} onChange={(e)=>setname(e.target.value)} />
        <label htmlFor="email" className=' text-black' > Enter Your Email</label>
        <input type="email" placeholder='Email' className='border-2 p-2 w-3/4 text-black' value={Email}  onChange={(e)=>setemail(e.target.value)} />
        <label htmlFor="password" className=' text-black' > Enter Your Password</label>
        <input type="password" placeholder='Password' className='border-2 p-2 w-3/4 text-black' value={Password}  onChange={(e)=>setpassword(e.target.value)} />
     <input type="button"  className='bg-blue-500 text-white px-4 py-2 rounded' onClick={apicall} value="Signup" />
    </form>
   </div>
   </div>
   </>
  )

}


export default Signup