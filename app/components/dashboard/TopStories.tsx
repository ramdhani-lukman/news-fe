"use client";
import React, { useEffect, useState } from "react";
import Item from "../news/item";
// import getHeadLines from '/lib/getHeadlines';
import ErrorCard from "../errorCard";
import getHeadLines from "@/app/lib/getHeadlines";
import { FaSearch, FaAngleRight, FaAngleLeft } from "react-icons/fa";

export default function TopStories() {
    const [headlines, setHeadlines] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [triggerSearch, setTriggerSearch] = useState(true);
    const [page, setPage] = useState(1);
    const [category, setCategory] = useState('');

    const categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology']; 

    useEffect(() => {
        const getToken = localStorage.getItem("api_token");
        const token = getToken == null ? "" : getToken;
        const query = searchValue;
        async function fetchHeadlines() {
            const result = await getHeadLines(token, query,category, page);
            if (result) {
                setHeadlines(result.data);
            }
        }

        fetchHeadlines();
    }, [triggerSearch,page,category]);

    const handleSearch = (e) => {
        e.preventDefault();
        setTriggerSearch(!triggerSearch);
    };

    if (!headlines) {
        return <ErrorCard />;
    }

    return (
        <div className="my-4 bg-white h-100 rounded-xl p-8 divide-y grow shadow-xl">
            <div className="flex justify-between mb-2 items-center">
                <h3 className="text-2xl mb-2 text-blue-500 cursor-pointer">
                    Headlines
                </h3>
                <form onSubmit={handleSearch}>
                    <input
                        className="outline-gray-400 border border-gray-400 p-2 rounded-lg"
                        placeholder="Search Topic"
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                </form>
            </div>
            <div className="flex gap-8 justify-around p-1" >
                {categories.map((category : string) => {
                    return (<button className="hover:font-semibold rounded-lg p-1" onClick={() => setCategory(category)} >{category}</button>)
                })}
            </div>
            
            {headlines.map((news: news) => (
                <Item news={news} key={news.title} />
            ))}

            <div className="pt-2 flex justify-end items-center">
              {page > 1 && (
                <button
                  className="p-2 mr-1 bg-blue-400 hover:bg-blue-500 text-white rounded-full align-right"
                  title="Previous page"
                  onClick={() => setPage(page - 1)}
                >
                  <FaAngleLeft />
                </button>
              )}
                Page {page}
                <button className="p-2 ml-1 bg-blue-400 hover:bg-blue-500 text-white rounded-full align-right" title="Next page"
                  onClick={() => setPage(page + 1)}
                >
                    <FaAngleRight />
                </button>
            </div>
        </div>
    );
}
