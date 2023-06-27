"use client"
import React, { useEffect } from 'react'
import Item from '../news/item'
import getHeadLines from '@/lib/getHeadlines'
import ErrorCard from '../errorCard';

export default async function TopStories() {
  const fetchHeadlines = await getHeadLines();
  if(!fetchHeadlines){
    return (
      <ErrorCard/>
    )
  }
  const headlines   = fetchHeadlines.data;
  return (
    <div className='my-4 bg-white h-100 rounded-xl p-8 divide-y grow shadow-xl'>
      <h3 className='text-2xl mb-2 text-blue-500 cursor-pointer' >Headlines </h3>
      {headlines.map((headline : any) => {
        return <Item news={headline}/>
      }) }
    </div>
  )
}
