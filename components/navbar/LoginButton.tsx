import React, { useState } from "react";
import LoginModal from "./LoginModal";

export default function LoginButton({ setUser }: { setUser: (user: any) => void }) {
    const [showLoginModal, setShowLoginModal] = useState(false);
    return (
        <>
            <button className="group relative h-12 w-32 overflow-hidden rounded-2xl bg-blue-500 text-lg font-bold text-white" onClick={() => {setShowLoginModal(true)}} >
                Login
                <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
            </button>
            <LoginModal showLoginModal={showLoginModal} setShowLoginModal={setShowLoginModal} setUser={setUser} />
        </>

    );
}
