"use client";
import axios from "axios";

export default async function getHeadLines(token : string){
    const apiBaseURL = process.env.NEXT_PUBLIC_API_BASEURL;
    const apiEndPoint = apiBaseURL+'/api/news/headlines';
    const headlines = await axios.get(apiEndPoint,{
        headers : {
            "Authorization" : token ? "Bearer "+token : ""
        }
    })
    if(headlines.status != 200){
        alert("Failed fetching headlines")
        return false
    }
    return headlines.data;
}