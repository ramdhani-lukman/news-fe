"use client";
import React from 'react'
import { useRouter } from 'next/router';
import Search from '@/components/search';


export default function page() {
  return (
    <div className="my-4 bg-white h-100 rounded-xl p-8 divide-y grow shadow-xl">
      <Search/>
    </div>
  )
}
