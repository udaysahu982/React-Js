import React, { act, useState } from 'react'
import Booking from './Booking'
import Login from './Login'
import History from './History'
import Side from './Side'

const Userdetail = () => {

    let [active,setActive]=useState('bookings')

  return (
    <div className='w-full h-150 flex '>
        <Side setActive={setActive}/>
      <div className='w-3/4 '>
      {active === "booking" && <Booking/>}
      {active === "login" && <Login/>}
      {active === "history" && <History/>}
      </div>
    </div>
  )
}

export default Userdetail
