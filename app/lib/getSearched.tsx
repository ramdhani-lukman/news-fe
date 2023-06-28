"use client";
import axios from "axios";

export default async function getSearched(
        token : string, 
        q : string,
        sources : string,
        from : string,
        to : string,
        page : number = 1
    ){
    const apiBaseURL = process.env.NEXT_PUBLIC_API_BASEURL;
    const apiEndPoint = apiBaseURL+'/api/news/search';
    const headlines = await axios.get(apiEndPoint,{
        params : {
            q,
            sources,
            from,
            to,
            page,
        },
        headers : {
            "Authorization" : token ? "Bearer "+token : ""
        },
    })
    if(headlines.status != 200){
        alert("Failed fetching headlines")
        return false
    }
    return headlines.data;
}