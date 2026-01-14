import React from 'react'

const Side = ({setActive}) => {
  return (
    <div className='w-1/4 bg-black h-400'>
      
      <ul>
        <li className='border-white text-2xl text-white p-5' onClick={()=>setActive("booking")}>Booking</li>
        <li className='border-white text-2xl text-white p-5' onClick={()=>setActive("history")}>History</li>
        <li className='border-white text-2xl text-white p-5' onClick={()=>setActive("login")}>Login</li>

      </ul>

    </div>
  )
}

export default Side
