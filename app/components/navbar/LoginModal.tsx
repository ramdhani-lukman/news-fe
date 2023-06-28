import axios from "axios";
import React, { useEffect, useState } from "react";
import ErrorAlert from "../ErrorAlert";
import Link from "next/link";

export default function LoginModal({showLoginModal,setShowLoginModal, setUser}) {
    const [modalClassName,setModalClassName] = useState('hidden');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors , setErrors] = useState("false");
    
    useEffect(() =>{
        const tmpClassName = showLoginModal == true ? "flex" : "hidden";
        setModalClassName(tmpClassName);
    },[showLoginModal]);
    
    const handleLogin = async (e : any) => {
        e.preventDefault();
        const baseURL = process.env.NEXT_PUBLIC_API_BASEURL
        const completeURL = baseURL + "/api/login";
        axios.post(completeURL,{
            email,
            password
        }).then((response) => {
            const user = response.data.data.user;
            localStorage.setItem("user",JSON.stringify(user));
            localStorage.setItem("api_token",response.data.data.token);
            setShowLoginModal(false);
            setUser(user);
        }).catch((error) => {
            const response = error.response;
            const responseData = response.data;
            alert(responseData.message);
        })
    }

    return (
        <div className={`fixed left-0 top-0 ${modalClassName} h-full w-full items-center justify-center bg-black bg-opacity-50 py-10`}>
            <div className="max-h-full w-full max-w-xl overflow-y-auto sm:rounded-2xl bg-white">
                <div className="w-full">
                    <div className="m-8 my-20 max-w-[400px] mx-auto">
                        <div className="mb-8">
                            <h1 className="mb-4 text-3xl font-extrabold">
                                Login
                            </h1>
                            <p className="text-gray-600">
                                Please login to save your preference
                            </p>
                        </div>
                        
                        <form onSubmit={handleLogin}>
                            <div className="mb-6">
                                <input type="email" name="email" className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div className="">
                                <input type="password" name="password" className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500 " placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                            </div>
                        </form>

                        <div className="mt-2 text-right underline text-blue-500">
                            <Link href={'/register'} onClick={() => setShowLoginModal(false)}> Doesnt have account? Register here </Link>
                        </div>

                        <div className="space-y-2 mt-6">
                            <button className="p-3 bg-blue-500 rounded-full text-white w-full font-semibold" onClick={handleLogin} >
                                Sign in
                            </button>
                            <button className="p-3 bg-red-500 border rounded-full w-full font-semibold text-white" onClick={() => setShowLoginModal(false)} >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
