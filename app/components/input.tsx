import React from 'react'

export default function Input({valueChangeHandler, placeholder, initialValue} : {valueChangeHandler : any, placeholder : string,initialValue : string}) {
  return (
        <input
            className="outline-gray-400 border border-gray-400 p-2 rounded-lg mt-2"
            placeholder={placeholder}
            onChange={valueChangeHandler}
            value={initialValue}
        />
  )
}