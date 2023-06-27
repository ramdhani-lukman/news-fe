import React from 'react'

export default function Item() {
  return (
    <div className='flex justify-between cursor-pointer flex-col md:flex-row-reverse' >
        <div>
          <img src='https://picsum.photos/200' className='w-full h-40 object-cover md:h-32 md:w-32 md:rounded-xl md:my-4 my-2 '/>
        </div>
        <div>
          <div className='text-gray-400 md:mt-4 text-sm' >  News Source</div>
          <h1 className='text-md md:text-2xl' >Lorem ipsum dolor sit amet, consectetur adipiscing elit,</h1>
          <p className='text-gray-400 text-sm' >11 Hours Ago</p>
          <p className='text-gray-400 text-sm mb-4' >Author Name</p>
        </div>
    </div>
  )
}
