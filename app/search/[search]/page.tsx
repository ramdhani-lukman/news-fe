"use client";
import Input from "@/app/components/input";
import Item from "@/app/components/news/item";
import getSearched from "@/app/lib/getSearched";
import getSources from "@/app/lib/getSources";
import React, { useState, useEffect } from "react";

export default function page({ params }: { params: { search: string } }) {
    const [searchQuery, setSearchQuery] = useState(params.search);
    const [sources, setSources] = useState([]);
    const [news,setNews] = useState([]);

    /* Form State */
    const [source, setSource] = useState(null);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    useEffect(() => {
        async function fetchSources() {
            const token = localStorage.getItem('api_token');
            const result = await getSources(token);
            const sources = result;
            setSources(sources);
        }
        fetchSources();
    }, []);

    useEffect(() => {
        const getToken = localStorage.getItem("api_token");
        const token = getToken == null ? "" : getToken;
        async function fetchHeadlines() {
            const result = await getSearched(token,searchQuery,source,startDate,endDate);
            if (result) {
                setNews(result);
            }
        }

        fetchHeadlines();
    }, [source,startDate,endDate]);
    



    return (
        <div className="my-4 bg-white h-100 rounded-xl p-8 divide-y grow shadow-xl">
            <div className="flex justify-between mb-2 items-center">
                <h3 className="text-2xl mb-2 text-blue-500 cursor-pointer flex">
                    Result for <p className="font-semibold" >`{params.search}`</p>
                </h3>
            </div>
            <div className="mb-2 flex" >
                <Input valueChangeHandler={setSearchQuery} placeholder="Search Query" initialValue={params.search} />
                <select className="outline-gray-400 border border-gray-400 p-2 rounded-lg mt-2 ml-2" onChange={(e : any) => setSource(e.target.value) } >
                    {sources.map((source : {
                        id : string,
                        name : string,
                        description : string
                    }) => {
                        return <option value={source.id} >{source.name}</option>
                    })}
                </select>
                <div className="flex items-center">
                    <input className="outline-gray-400 border border-gray-400 p-2 rounded-lg mt-2 ml-2" type="date" onChange={(e : any) => setStartDate(e.target.value) }/>
                    <p className="" >To</p>
                    <input className="outline-gray-400 border border-gray-400 p-2 rounded-lg mt-2 ml-2" type="date" onChange={(e : any) => setEndDate(e.target.value) }/>
                </div>
            </div>
            <div className="mt-2">
                {news.map((news: news) => (
                    <Item news={news} key={news.title} />
                ))}
            </div>
        </div>
    )
}
