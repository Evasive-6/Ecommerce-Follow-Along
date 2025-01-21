import React, { useState } from "react";
import 'tailwindcss/tailwind.css';
import bcrypt from 'bcryptjs';

const SignUp = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
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

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!form.email.includes('@')) {
            alert("Please Enter a Valid Email Address");
            return;
        }

        if (form.password.length < 8 || form.password.length > 16) {
            alert("Enter a password within a range of 8-16 Characters");
            return;
        }

        const hashedPassword = await bcrypt.hash(form.password, 10);
        const payload = {
            name: form.name,
            email: form.email,
            password: hashedPassword
        };

        fetch("http://localhost:8884/create", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        })
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            alert("Hurray! Sign-up successfully");
        })
        .catch((err) => {
            console.log(err);
            alert("Error signing up. Please try again.");
        });
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700">Name</label>
                    <input
                        type="text"
                        value={form.name}
                        onChange={handleNameChange}
                        className="w-full px-3 py-2 border rounded-lg"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700">Email</label>
                    <input
                        type="email"
                        value={form.email}
                        onChange={handleEmailChange}
                        className="w-full px-3 py-2 border rounded-lg"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700">Password</label>
                    <input
                        type="password"
                        value={form.password}
                        onChange={handlePasswordChange}
                        className="w-full px-3 py-2 border rounded-lg"
                    />
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;
