import React from 'react'
import Item from '../news/item'

export default function PicksForYou() {
  return (
    <div className='my-4 bg-white h-screen rounded-xl p-8 divide-y basis-1/4 ml-2 sm:block shadow-xl'>
      <h3 className='text-2xl mb-2 text-blue-500 cursor-pointer' >Picks For You</h3>
      <Item/>
    </div>
  )
}
