import React, { useEffect, useState } from 'react'

const UseEffect = () => {

    let [count,setCount]=useState(0);

    let Inc=()=>{
        setCount(count+1)
    }
    useEffect(()=>{
        console.group("running...")
    },[])
  return (
  <>
  Count : {count}
  <button onClick={Inc}>increment</button>
  <h1>use effect hook</h1>
  </>
  )
}

export default UseEffect
