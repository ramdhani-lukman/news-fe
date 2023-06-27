"use client"
import moment from "moment";
import React, { useEffect, useState } from "react";

export default function CurrentDate() {
    const [greetingText,setGreetingText] = useState("....")
    
    const getGreetings = () => {
        const currentDate = new Date()
        const currentTime = currentDate.getHours()
        if(currentTime < 12){
            setGreetingText("Good morning")
        }else if(currentTime < 18){
            setGreetingText("Good Afternoon")
        }else {
            setGreetingText("Good Evening")
        }
    }

    useEffect(() => {
        getGreetings()
    }, [])
    

    return (
        <div className="max-sm:m-4" >
            <h1 className="text-2xl" >{greetingText}</h1>
            <p> { moment(new Date()).format("dddd, DD MMMM YYYY") } </p>
        </div>
    )
}
