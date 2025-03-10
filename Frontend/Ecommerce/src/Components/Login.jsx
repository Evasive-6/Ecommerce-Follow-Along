import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setEmail } from './store/actions'; 

const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.email.includes('@')) {
      alert('Please enter a valid email');
      return;
    }
    if (form.password.length < 4 || form.password.length > 16) {
      alert('Enter a password within a range of 4-16 characters');
      return;
    }

    alert('Logging in...');

    const payload = {
      email: form.email,
      password: form.password,
    };

    try {
      const response = await fetch('http://localhost:8800/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (response.ok) {
        // Dispatch the email to global state
        dispatch(setEmail(data.email));

        alert(`Login successful! Welcome, ${data.email || 'User'}`);
      } else {
        alert(`Login failed: ${data.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="w-80 h-auto bg-slate-300 rounded-2xl flex flex-col justify-center items-center mx-auto my-24 p-6 shadow-lg">
      <h1 className="text-4xl mb-4">Login</h1>
      <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
        <input
          className="p-3 w-60 mb-4 rounded-2xl"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
        <input
          className="p-3 w-60 mb-4 rounded-2xl"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Enter your password"
        />
        <button
          className="bg-white p-2 border border-black rounded-2xl hover:shadow-md"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
