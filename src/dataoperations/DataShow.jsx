import React, { useEffect, useState } from 'react'

const DataShow = () => {


    
    useEffect(()=>{
        
        let api="http://localhost:3000/movie"

        axios.get(api).then( (res)=>{
           
        })

    },[])

  return (
    <>

    <table>
        <tr>
            <th>Name</th>
            <th>age</th>
        </tr>
        <tr>
            <td></td>
            <td></td>
        </tr>
    </table>
    
    </>
  )
}

export default DataShow
