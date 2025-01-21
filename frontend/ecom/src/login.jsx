import React, { useState } from "react";
import 'tailwindcss/tailwind.css';
import bcrypt from 'bcryptjs';
export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        const hashedPassword = await bcrypt.hash(password, 10); 
        const isMatch = await bcrypt.compare(password, hashedPassword);
        if (isMatch) {
            console.log("Login successful");
        } else {
            console.log("Invalid credentials");
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Login</h2>
            <form onSubmit={handleLogin}>
                <div className="mb-4">
                    <label className="block text-gray-700">Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-3 py-2 border rounded-lg"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full px-3 py-2 border rounded-lg"
                    />
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg">Login</button>
            </form>
        </div>
    );
};

const App = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="space-y-10">
                
                <Login />
            </div>
        </div>
    );
};

export default App;