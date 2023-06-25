import React from 'react'

export default function Item() {
  return (
    <div className='flex justify-between cursor-pointer' >
        <div>
          <div className='text-gray-400 mt-4' >  News Source</div>
          <h1 className='text-2xl' >Lorem ipsum dolor sit amet, consectetur adipiscing elit,</h1>
          <p className='text-gray-400 text-sm' >11 Hours Ago</p>
          <p className='text-gray-400 text-sm mb-4' >Author</p>
        </div>
        <div>
          <img src='https://picsum.photos/200' className='h-48 w-full object-cover md:h-full md:w-48 '/>
        </div>
    </div>
  )
}
