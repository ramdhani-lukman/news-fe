"use client";
import React, { useEffect, useState } from "react";
import ProfileButton from "./navbar/ProfileButton";
import LoginButton from "./navbar/LoginButton";
import Link from "next/link";
import {FaSearch} from 'react-icons/fa';

export default function Navbar() {
    const [user, setUser] = useState(false);
    const [isLogedIn, setIsLogedIn] = useState(false);
    const [search, setSearch] = useState("")

    useEffect(() => {
        const localStorageUser = localStorage.getItem('user');
        if(localStorageUser){
            setIsLogedIn(true);
        }else{
            setIsLogedIn(false);
        }
    }, [user]);

    const handleSubmit = (e : any) =>{
        e.preventDefault();
        const baseURL = process.env.NEXT_PUBLIC_APP_BASEURL;
        const completeURL = baseURL + "/search?q="+search;
        window.location.href = completeURL
    }
    
    return (
        <div className="flex justify-between p-3 place-items-center shadow-xl">
            <div className="mx-3 flex">
                <Link href="/">
                    <img src="/images/logo.png" className="max-w-[160px]" />
                </Link>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="flex items-center ml-4 delay-75
                                appearance-none w-full bg-gray-200 text-gray-700 border
                                border-gray-200 rounded py-3 px-4 leading-tight 
                                focus:outline-none focus:bg-white focus:border-gray-500 
                                transition-all duration-300 ease-in-out
                                max-sm:hidden">
                        <FaSearch/>
                        <input className="bg-gray-200 outline-none ml-2"
                            placeholder="Search topic"
                            onChange={(e) => { setSearch(e.target.value)}}
                        />
                    </div>
                </form>
            </div>
            <div className="w-100 flex">
                { isLogedIn ? <ProfileButton setUser={setUser} /> : <LoginButton setUser={setUser} /> }
            </div>
            
        </div>
    );
}
