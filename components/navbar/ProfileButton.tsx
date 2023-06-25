import React, { useState } from "react";

export default function ProfileButton() {
    const [showDropdown, setShowDropdown] = useState("hidden")
    
    return (
        <div className="relative">
            <button className="flex items-center focus:outline-none" onClick={() => { setShowDropdown("") }} >
                <img
                    className="h-10 w-10 rounded-full object-cover"
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                    alt="User Avatar"
                />
            </button>
            <div className="absolute right-0 mt-2 py-2 w-48 bg-white border border-gray-200 rounded shadow-lg hidden">
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" >
                    Profile
                </a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" >
                    Settings
                </a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" >
                    Logout
                </a>
            </div>
        </div>
    );
}
