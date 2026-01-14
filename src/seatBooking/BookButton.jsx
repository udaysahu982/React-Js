import React from 'react'

const BookButton = ({selectedSeats}) => {
  return (
    <div className="flex justify-between items-center">
      <p  className="text-sm">
        Selected: {selectedSeats.join(", ") || "None"}
      </p>
      <button
      disabled={!selectedSeats.length}
      className="bg-green-600 text-white px-3 py-1 rounded disabled:bg-gray-400"
      >Book Now</button>
    </div>
  )
}

export default BookButton
