"use client";
import React, { useEffect, useState } from "react";
import ProfileButton from "./navbar/ProfileButton";
import LoginButton from "./navbar/LoginButton";

export default function Navbar() {
    const [user, setUser] = useState(false);
    const [isLogedIn, setIsLogedIn] = useState(false);

    useEffect(() => {
        const localStorageUser = localStorage.getItem('user');
        if(localStorageUser){
            setIsLogedIn(true);
        }
    }, [user])
    return (
        <div className="flex justify-between p-3 place-items-center shadow-xl">
            <div className="mx-3">
                <img src="/images/logo.png" className="max-w-[150px]" />{" "}
            </div>
            <div className="grow mx-5">
                <input
                    className="delay-75 
                        appearance-none w-full bg-gray-200 text-gray-700 border
                        border-gray-200 rounded py-3 px-4 leading-tight 
                        focus:outline-none focus:bg-white focus:border-gray-500 
                        transition-all duration-300 ease-in-out
                        max-sm:hidden
                        "
                    placeholder="Search topic"
                />
            </div>
            
            { isLogedIn ? <ProfileButton /> : <LoginButton setUser={setUser} /> }
        </div>
    );
}
