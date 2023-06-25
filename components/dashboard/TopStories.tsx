import React from 'react'
import Item from '../news/item'

export default function TopStories() {
  
  return (
    <div className='my-4 bg-white h-100 rounded-xl p-8 divide-y basis-1/2 grow shadow-xl'>
      <h3 className='text-2xl mb-2 text-blue-500 cursor-pointer' >Top stories  </h3>
      <Item/>
      <Item/>
      <Item/>
      <Item/>
      <Item/>
    </div>
  )
}
