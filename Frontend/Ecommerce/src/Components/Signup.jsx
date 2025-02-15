import React, { useState } from 'react';

const Signup = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleNameChange = (e) => {
        setForm({
            ...form,
            name: e.target.value
        });
    };

    const handleEmailChange = (e) => {
        setForm({
            ...form,
            email: e.target.value
        });
    };

    const handlePasswordChange = (e) => {
        setForm({
            ...form,
            password: e.target.value
        });
    };
    const handleSubmit=(e)=>{
        e.preventDefault()

        if(!form.email.includes('@')){
            alert("Please enter the valid email")
        }
        if(form.password.length< 4 || form.password.length>16 ){
            alert('Enter a password within a range of 8-16 caracters')
        }

        alert("Hurray, you successfully signup")
    // }
    let payload={
        name:form.name,
        email:form.email,
        password:form.password

    }
    fetch("http://localhost:8088/signup",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(payload)
    }).then((res)=>res.json()).then((res)=>{
        console.log(res)
    }).catch((error)=>{
        console.log(error)
    });

}

    return (
        <div className='max-w-md h-auto bg-slate-300 rounded-2xl flex flex-col justify-center items-center mx-auto my-24 p-6 shadow-lg'> <div className='text-4xl mb-4'>Signup</div> 
        <form action="" onSubmit={handleSubmit} className='w-full flex flex-col items-center'> 
        <input className=' p-3 w-60 mb-4 rounded-2xl' value={form.name} type='text' onChange={handleNameChange} placeholder='Name'></input> 
        <input className='p-3 w-60 mb-4 rounded-2xl' value={form.email} type='email' onChange={handleEmailChange} placeholder='Email'></input> 
        <input className='p-3 w-60 mb-4 rounded-2xl' value={form.password} type='password' onChange={handlePasswordChange} placeholder='Password'></input> 
        <button className='bg-white p-2 border border-black rounded-2xl hover:shadow-md'>Submit</button> </form> </div>
    );
};

export default Signup;
