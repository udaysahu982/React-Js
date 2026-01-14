import React from 'react'

const SeatGrid = ({bookedSeats, selectedSeats, setSelectedSeats}) => {

    let seats=["S1","S2","S3","S4","S5"];

    let handleSeatClick=(seat)=>{
        if(bookedSeats.includes(seat)) return;

        setSelectedSeats((prev)=>
            prev.includes(seat)? prev.filter((s)=>s!==seat) :[...prev,seat]
        )
    }

  return (
    <div className="flex gap-3 justify-center mb-4">
        {
            seats.map((e)=>{
                let isBooked=bookedSeats.includes(e);
                let isSelected=selectedSeats.includes(e);

                return (
                    <div 
                    key={e}
                    onClick={()=>handleSeatClick(e)} 
                    className={`w-8 h-8 flex items-center justify-center text-sm rounded cursor-pointer
                    ${
                isBooked
                  ? "bg-gray-400"
                  : isSelected
                  ? "bg-green-600 text-white"
                  : "bg-green-200"
              }`}>
                {e}
                    </div>
                )

            })
        }
      
    </div>
  )
}

export default SeatGrid
