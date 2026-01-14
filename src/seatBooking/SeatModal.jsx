import React from 'react'
import { useState } from 'react'
import Screen from "./Screen";
import SeatGrid from "./SeatGrid";
import BookButton from "./BookButton";

const SeatModal = () => {

    let bookedSeats=["S2"]
    let [selectedSeats,setSelectedSeats]=useState([])

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center">
      <div className="bg-white p-6 rounded w-100">

        {/* Screen direction */}
        <Screen />

        {/* Seats */}
        <SeatGrid
          bookedSeats={bookedSeats}
          selectedSeats={selectedSeats}
          setSelectedSeats={setSelectedSeats}
        />

        {/* Book Now */}
        <BookButton selectedSeats={selectedSeats} />

        {/* Close */}
        <button
          
          className="mt-4 text-sm text-gray-500"
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default SeatModal
