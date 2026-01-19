import React from 'react'

const seat = () => {
    let seat=[1,2,3,4,5];
  return (
    <div className='border h-20 flex gap-5 justify-center items-center'>
        hello
      {seat.map((e,i)=>(<div key={i} className='border h-10 w-10 flex justify-center items-center cursor-pointer bg-red-500'>{e}</div>))}

    </div>
  )
}

export default seat
