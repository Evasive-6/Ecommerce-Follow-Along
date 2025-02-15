import React from 'react'

const Login = () => {
  return (
    <div className='w-80 h-60 bg-slate-300 rounded-2xl flex flex-col justify-center items-center mx-auto my-24 shadow-lg'>
        <h1 className='text-4xl'>Login</h1>
      <div >
        <input className='p-3 w-60 m-3 rounded-2xl  ' type="text" placeholder='Enter your username'/>
      </div>
      <div>
        <input className='p-3 w-60 m-3 rounded-2xl' type='password'placeholder='Enter your password'/>
      </div>
      <button className='bg-white p-1 border border-black rounded-2xl hover:shadow-md'>Submit</button>
    </div>
  )
}

export default Login
