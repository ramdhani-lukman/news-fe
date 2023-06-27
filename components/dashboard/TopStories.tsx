"use client";
import React, { useEffect, useState } from 'react';
import Item from '../news/item';
import getHeadLines from '@/lib/getHeadlines';
import ErrorCard from '../errorCard';

export default function TopStories() {
  const [headlines, setHeadlines] = useState([]);

  useEffect(() => {
    const getToken = localStorage.getItem('api_token');
    const token = getToken == null ? '' : getToken;

    async function fetchHeadlines() {
      const result = await getHeadLines(token);
      if (result) {
        setHeadlines(result.data);
      }
    }

    fetchHeadlines();
  }, []);

  if (!headlines) {
    return <ErrorCard />;
  }

  return (
    <div className="my-4 bg-white h-100 rounded-xl p-8 divide-y grow shadow-xl">
      <h3 className="text-2xl mb-2 text-blue-500 cursor-pointer">Headlines</h3>
      {headlines.map((news) => (
        <Item news={news} key={news.title} />
      ))}
    </div>
  );
}
