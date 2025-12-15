import React, { useState } from 'react'

const Hook = () => {

    // keyword [var,function]= useState(initial value)
    let [count,setCount]= useState(0)
    let [myname,setmyname]= useState("")

    let Inc=()=>{
        setCount(count+1);
    }
    let Dec=()=>{
        if(count!==0){

            setCount(count-1);
        }
    }
    let changeinp=(e)=>{
        setmyname(e.target.value)
    }
    

  return (
    <>
    <h1>Use State</h1>

    <button onClick={Inc}>Increment</button>
    <button onClick={Dec}>Decrement</button>

    Count:{count}
    <br />
    <br />
    <br />

    <input type="text" onChange={changeinp} />
    <h1>Name:{myname}</h1>
    
    </>
  )
}

export default Hook