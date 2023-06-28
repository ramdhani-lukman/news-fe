import axios from 'axios';
import React from 'react'

export default async function getSources(token : string) {
    const apiBaseURL = process.env.NEXT_PUBLIC_API_BASEURL;
    const apiEndPoint = apiBaseURL+'/api/news/source';
    const sources = localStorage.getItem("sources")
    if(sources == null){
        const request   = await axios.get(apiEndPoint,{
            headers : {
                "Authorization" : token ? "Bearer "+token : ""
            }
        });
        const apiResponses = request.data;
        const data     = apiResponses.data;
        localStorage.setItem("sources",JSON.stringify(data));
        return data;
    }else{
        return JSON.parse(sources);
    }
}
