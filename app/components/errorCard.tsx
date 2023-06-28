import React from 'react'

export default function ErrorCard() {
  return (
    <div className='my-4 bg-white h-100 rounded-xl p-8 divide-y grow shadow-xl'>
      <h3 className='text-2xl mb-2 text-blue-500 cursor-pointer' >Error fetching data</h3>
    </div>
  )
}
