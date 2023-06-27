"use client";
import axios from "axios";
import React, { useState } from "react";

export default function page() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setConfirmPassword] = useState("");

    
    const handleRegister = (e : any) => {
        e.preventDefault();
        
        const baseURL = process.env.NEXT_PUBLIC_API_BASEURL;
        const completeURL = baseURL+"/api/register";
        
        axios.post(completeURL,{
            name,
            email,
            password,
            password_confirmation : passwordConfirmation
        }).then((response) => {
            const user = response.data.data.user;
            localStorage.setItem("user",JSON.stringify(user));
            localStorage.setItem("api_token",response.data.data.token);
            window.location.href = "/";
        }).catch((error) => {
            const response = error.response;
            const responseData = response.data;
            alert(responseData.message);
        })
    };

    return (
        <div className="my-4 bg-white rounded-xl p-8 divide-y basis-1/4 ml-2 sm:block shadow-xl">
            <h3 className="text-2xl mb-2 text-black">Register Account</h3>

            <form onSubmit={handleRegister} className="mt-4">
                <input
                    type="text"
                    name="name"
                    className="w-full py-4 px-8 placeholder:font-semibold border border-gray-400 rounded hover:ring-1 my-4"
                    placeholder="Full name"
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <input
                    type="email"
                    name="email"
                    className="w-full py-4 px-8 placeholder:font-semibold border border-gray-400 rounded hover:ring-1 outline-blue-500 mb-4"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <div className="flex space-x-2" >
                    <input
                        type="password"
                        name="password"
                        className="w-full py-4 px-8 placeholder:font-semibold border border-gray-400 rounded hover:ring-1 outline-blue-500 mb-4"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        className="w-full py-4 px-8 placeholder:font-semibold border border-gray-400 rounded hover:ring-1 outline-blue-500 mb-4"
                        placeholder="Password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                
                <div className="flex justify-end w-full">
                    <button className="group relative h-12 w-32 overflow-hidden rounded-3xl bg-blue-500 text-lg font-bold text-white" onClick={handleRegister} >
                        Register
                    </button>
                </div>

            </form>
        </div>
    );
}
