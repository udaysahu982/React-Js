import React, { useState } from 'react'
import "./seat.css"

const seat = () => {
    
    let seats=[1,2,3,4,5];

    let [selectSeat,setSelectSeat]=useState([]);

   let toggleseat=(seat)=>{

    if(selectSeat.includes(seat)){

      setSelectSeat(selectSeat.filter(s=>s !== seat));
    }
    else{
      setSelectSeat([...selectSeat,seat]);
    }
   }

    

  return (
    <div className='container'>
        hello
        
        <div className='seat-grid'>

        {seats.map((seat)=>(
          <button 
          key={seat}
          className={
            selectSeat.includes(seat) ? "seat selected": " seat "
          }
          onClick={()=>toggleseat(seat)}
          >
            {seat}
          </button>
        ))}

        </div>

    </div>
  )
}

export default seat
