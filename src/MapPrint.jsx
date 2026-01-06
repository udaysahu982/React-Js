import React from 'react'

const MapPrint = () => {

    let fruits=["apple","mange","grapes"]
  return (
    <div>
      <ul>
        {fruits.map((e,index)=>(<li key={index}>{e}</li>))}
        
      </ul>
    </div>
  )
}

export default MapPrint
