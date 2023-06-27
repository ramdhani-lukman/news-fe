import React, { useEffect, useState } from "react";

export default function ProfileButton({setUser} : {setUser : any}) {
    const [showDropdown, setShowDropdown] = useState("hidden")
    const [userAvatar,setUserAvatar] = useState();


    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        let avatar = typeof(user.avatar) != 'undefined' ? user.avatar : "https://ui-avatars.com/api/?name="+user.name ;
        setUserAvatar(avatar)
    },[]);

    const logout = ()=>{
        localStorage.removeItem("user");
        localStorage.removeItem("api_token");
        setUser(false);
        window.location.reload()
    }
    
    return (
        <div className="relative">
            <button className="flex items-center focus:outline-none" onClick={() => { setShowDropdown(showDropdown == 'hidden' ? "flex-col" : 'hidden') }} >
                <img
                    className="h-10 w-10 rounded-full object-cover"
                    src={userAvatar}
                    alt="User Avatar"
                />
            </button>
            <div className={`absolute right-0 mt-2 py-2 w-48 bg-white border border-gray-200 rounded shadow-lg ${showDropdown}`}>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" >
                    Settings
                </a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={logout}>
                    Logout
                </a>
            </div>
        </div>
    );
}
