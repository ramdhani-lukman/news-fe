import axios from "axios";

export default async function getHeadLines(){
    const apiBaseURL = process.env.NEXT_PUBLIC_API_BASEURL;
    const apiEndPoint = apiBaseURL+'/api/news/headlines';
    const token     = localStorage.getItem("api_token");
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